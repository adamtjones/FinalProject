(function() {
    'use strict';
    
    angular
    .module('flowers')
    .controller('textController', function(textAPI) {
        
        var vm = this;

        var finalArray = [];
        var containerArray = [];

        var loremArray = [];
        var baconArray = [];
        var gibberishArray = [];
        var hipsterArray = [];
        var userArray = [];

		vm.form =[];
		vm.form.checkbox = [];
		vm.form.checkbox.loremInput = false;
		vm.form.checkbox.gibberishInput = false;
		vm.form.checkbox.hipsterInput = false;
		vm.form.checkbox.baconInput = false;

		vm.submit = function(){

			var objectTemplate = (function(array,percentage){
			  this.array = array;
			  this.percentage = percentage;
			});

			if (vm.form.textInput != null) {
				var data = vm.form.textInput
				data = data.split(" ");
				userArray.push(data);
				userArray = _.flatten(userArray); 				
				var obj = new objectTemplate (userArray, vm.form.percentage.textInput);
				containerArray.push(obj);
			}

			if (vm.form.checkbox.loremInput === true){
				var obj = new objectTemplate(loremArray, vm.form.percentage.loremInput);
				containerArray.push(obj);
			}
			if (vm.form.checkbox.gibberishInput === true){
				var obj = new objectTemplate(gibberishArray, vm.form.percentage.gibberishInput);
				containerArray.push(obj);
			}
			if (vm.form.checkbox.hipsterInput === true){
				var obj = new objectTemplate(hipsterArray, vm.form.percentage.hipsterInput);
				containerArray.push(obj);
			}
			if (vm.form.checkbox.baconInput === true){
				var obj = new objectTemplate(baconArray, vm.form.percentage.baconInput);
				containerArray.push(obj);	
			}
			writeTextArray();
		}

		var writeTextArray = function(){

			var wordLength = vm.form.wordTotal;


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
			vm.form.textOutput = finalArray.join(" ");
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