(function() {
    'use strict';
    
    angular
    .module("myApp")
    .controller('mainController', function() {
        var vm = this;

		var objectTemplate = (function(array,percentage){
		  this.array = array;
		  this.percentage = percentage;
		});

		var animals = ["cat", "dog", "monkey", "human", "bird", "dinosaur"];
		var numbers = [1, 2, 3, 4, 5, 6];
		var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];		
		
		var obj = new objectTemplate(animals,25);
		var obj2 = new objectTemplate(numbers,25);
		var obj3 = new objectTemplate(planets,50);
		var containerArray = [obj, obj2, obj3];

		var tempArray = JSON.parse(JSON.stringify(containerArray));
		var tempArray = tempArray.map(function(item){
			return item.array.splice(0,Math.round( (item.percentage / 100) * item.array.length));
		});

		tempArray = _.flatten(tempArray);	

		var finalArray = [];

		var wordLength = 50;
		var words = wordLength / tempArray.length;

		while (finalArray.length <= words) {
		  	finalArray.push(_.shuffle(tempArray));
		}

		finalArray = _.flatten(finalArray);
		finalArray = finalArray.splice(0, wordLength);
		console.log(finalArray);
		console.log(finalArray.length);

      
    });
})();