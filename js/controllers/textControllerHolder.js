(function() {
    'use strict';
    
    angular
    .module('flowers')
    .controller('textController', function(textAPI) {
        
        var vm = this;

        var finalArray = [];

        var loremArray = [];
        var baconArray = [];
        var gibberishArray = [];
        var hipsterArray = [];

        var animals = ["cat", "dog", "monkey", "human", "bird", "dinosaur"];
		var numbers = ["1","2","3","4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
		var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];	


		var writeTextArray = function(){
			var objectTemplate = (function(array,percentage){
			  this.array = array;
			  this.percentage = percentage;
			});

			var obj1 = new objectTemplate(animals,5);
			var obj2 = new objectTemplate(numbers,5);
			var obj3 = new objectTemplate(planets,5);
			var obj4 = new objectTemplate(loremArray,5);
			var obj5 = new objectTemplate(baconArray,5);
			var obj6 = new objectTemplate(gibberishArray, 50)
			var obj7 = new objectTemplate(hipsterArray, 10);
			var containerArray = [obj1, obj2, obj3, obj4, obj5, obj6, obj7];
			var wordLength = 100;


			var tempArray = JSON.parse(JSON.stringify(containerArray));
			var tempArray = tempArray.map(function(item){
				var percentPull = item.percentage / 100;
				var wordPull = percentPull * wordLength;
				var repeatTimes = wordPull / item.array.length;

				if (wordLength > item.array.length && item.array.length > 0){ 

					var holderArray = [];

					while (holderArray.length < repeatTimes) {
	    				holderArray.push(item.array);
					};
					holderArray = _.flatten(holderArray);
					return holderArray.splice(0,Math.round(wordPull));

				};

				return item.array.splice(0,Math.round(wordPull));
					
			});


			tempArray = _.flatten(tempArray);	
			var words = wordLength / tempArray.length;

			while (finalArray.length <= words) {
			  	finalArray.push(_.shuffle(tempArray));
			}

			finalArray = _.flatten(finalArray);
			finalArray = finalArray.splice(0, wordLength);
			console.log(finalArray);
			console.log(finalArray.length);
		};	


		//getting text arrays from APIs
		var loremText = textAPI.getLoremIpsum();
	      	
	      loremText.then(function(response){
	      	var data = response.data.text_out;
	  		data = data.replace(/<[^>]*>/g, "");
	  		data = data.replace(/(\r\n|\n|\r)/gm," ");
			data = data.split(" ");
			loremArray.push(data);
			loremArray = _.flatten(loremArray);
	    });


	    var baconText = textAPI.getBaconIpsum();
	      	
	      baconText.then(function(response){ 
	      	var data = response.data.toString();
	      	data = data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") 
	      	data = data.replace(/\s\s+/g, ' ');
	      	data = data.split(" ");
			baconArray.push(data);
			baconArray = _.flatten(baconArray);
	    });

	    var gibberishText = textAPI.getGibberishIpsum();
	      	
	      gibberishText.then(function(response){     
	      	var data = response.data.text_out;
	  		data = data.replace(/<[^>]*>/g, "");
	  		data = data.replace(/(\r\n|\n|\r)/gm," ");
			data = data.split(" ");
			gibberishArray.push(data);
			gibberishArray = _.flatten(gibberishArray);  
	    }); 

	    var hipsterText = textAPI.getHipsterIpsum();
	      	
	      hipsterText.then(function(response){
	    	var data = response.data.text;
	   		data = data.replace(/<[^>]*>/g, "");
	      	data = data.replace(/\s\s+/g, ' ');	   		 
			data = data.split(" ");	   		
			hipsterArray.push(data);
			hipsterArray = _.flatten(hipsterArray); 	      
	    });
	     	   	


      
    });
})();