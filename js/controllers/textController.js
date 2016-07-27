(function() {
    'use strict';
    
    angular
    .module('flowers')
    .controller('textController', function(textAPI) {
        var vm = this;

		var objectTemplate = (function(array,percentage){
		  this.array = array;
		  this.percentage = percentage;
		});

		var animals = ["cat", "dog", "monkey", "human", "bird", "dinosaur"];
		var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
		var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];		
		
		var obj = new objectTemplate(animals,33);
		var obj2 = new objectTemplate(numbers,33);
		var obj3 = new objectTemplate(planets,33);
		var containerArray = [obj, obj2, obj3];

		var tempArray = JSON.parse(JSON.stringify(containerArray));
		var tempArray = tempArray.map(function(item){
			return item.array.splice(0,Math.round( (item.percentage / 100) * item.array.length));
		});

		tempArray = _.flatten(tempArray);	

		var finalArray = [];

		var wordLength = 9;
		var words = wordLength / tempArray.length;

		while (finalArray.length <= words) {
		  	finalArray.push(_.shuffle(tempArray));
		}

		finalArray = _.flatten(finalArray);
		finalArray = finalArray.splice(0, wordLength);
		console.log(finalArray);
		console.log(finalArray.length);


		//getting text arrays from APIs
		var loremArray = textAPI.getLoremIpsum();
      	
      	loremArray.then(function(response){     
      		console.log(loremArray);		      
    	});

    	var baconArray = textAPI.getBaconIpsum();
      	
      	baconArray.then(function(response){     
      		console.log(baconArray);		      
    	});

    	var skateArray = textAPI.getSkateIpsum();
      	
      	skateArray.then(function(response){     
      		console.log(skateArray);		      
    	}); 

    	var hipsterArray = textAPI.getHipsterIpsum();
      	
      	hipsterArray.then(function(response){     
      		console.log(hipsterArray);		      
    	});     	   	


      
    });
})();