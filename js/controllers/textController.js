(function() {
    'use strict';
    
    angular
    .module('flowers')
    .controller('textController', function($state, textAPI,clipboard, API) {
        
        var vm = this;

        // empty container arrays to be populated by writeTextArray()
        var finalArray = [];
        var containerArray = [];
        //empty container arrays to be populated by submit()
        var loremArray = [];
        var baconArray = [];
        var gibberishArray = [];
        var hipsterArray = [];
        var userArray = [];
        // defining form variables
		vm.form =[];
		vm.form.checkbox = [];
		vm.form.checkbox.loremInput = false;
		vm.form.checkbox.gibberishInput = false;
		vm.form.checkbox.hipsterInput = false;
		vm.form.checkbox.baconInput = false;        

        //shows slightly different features when user is logged in
        var loggedIn = false;
    	if(API.getToken() !== null) {
        	vm.loggedIn = true;
       	}

		//clipboard function so users can copy text
		vm.supported = false;
        vm.textToCopy = 'I can copy by clicking!';

        vm.success = function () {
        	clipboard.copyText(vm.form.textOutput);
            alert('Copied!');
        };
        vm.fail = function (err) {
            console.error('Error!', err);
        };

		//translates user inputs to objectTemplate and pushes to containerArray
		//calls function writeTextArray()
		vm.submit = function(){

			var objectTemplate = (function(array,percentage){
			  this.array = array;
			  this.percentage = percentage;
			});

			if (vm.form.textInput != null) {
				var data = vm.form.textInput.toLowerCase();
				data = data.replace(/\.|!|,|<[^>]*>|(&amp;)|(\r\n|\n|\r)|\s\s/gm, "");
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

		//takes containerArray and creates textOutput based on user inputs
		var writeTextArray = function(){
			//sets default wordTotal to 200 if none is provided by user
			if (vm.form.wordTotal == null) {
				var wordLength = 200;
			}
			else {
				var wordLength = vm.form.wordTotal;
			}

			//calculates the percentage of selected arrays types based on user inputs,
			//sets containerArray to tempArray for further changes
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

			//mixes up the tempArray so everything is random, makes sure wordTotal 
			//from output is equal to user input or default, pushes tempArray to
			//finalArray and writes it to html
			tempArray = _.flatten(tempArray);	
			var words = wordLength / tempArray.length;

			while (finalArray.length <= words) {
			  	finalArray.push(_.shuffle(tempArray));
			}
			finalArray = _.flatten(finalArray);
			finalArray = finalArray.splice(0, wordLength);
			vm.form.textOutput = "";
			vm.form.textOutput = finalArray.join(" ");
		};

		vm.reset = function() {
			$state.reload();
		};
		$('#modal').on('hidden.bs.modal', function (e) {
 			vm.reset();
		})

		vm.random = function() {
			var objectTemplate = (function(array,percentage){
			  this.array = array;
			  this.percentage = percentage;
			});
			var obj = new objectTemplate(loremArray, 25);
				containerArray.push(obj);
			var obj = new objectTemplate(gibberishArray, 25);
				containerArray.push(obj);
			var obj = new objectTemplate(hipsterArray, 25);
				containerArray.push(obj);
			var obj = new objectTemplate(baconArray, 25);
				containerArray.push(obj);			

			writeTextArray();
		}	


		//getting text arrays from APIs
		var loremText = textAPI.getLoremIpsum();
	      	
	      loremText.then(function(response){
	      	var data = response.data.text_out.toLowerCase();
			data = data.replace(/\.|!|,|<[^>]*>|(&amp;)|(\r\n|\n|\r)|\s\s/gm, "");
			data = data.split(" ");
			loremArray.push(data);
			loremArray = _.flatten(loremArray);
	    });


	    var baconText = textAPI.getBaconIpsum();
	      	
	      baconText.then(function(response){ 
	      	var data = response.data.toString();
	      	data = data.toLowerCase();
			data = data.replace(/\.|!|,|<[^>]*>|(&amp;)|(\r\n|\n|\r)|\s\s/gm, "");
	      	data = data.split(" ");
			baconArray.push(data);
			baconArray = _.flatten(baconArray);
	    });

	    var gibberishText = textAPI.getGibberishIpsum();
	      	
	      gibberishText.then(function(response){     
	      	var data = response.data.text_out.toLowerCase();
	  		data = data.replace(/\.|!|,|<[^>]*>|(&amp;)|(\r\n|\n|\r)|\s\s/gm, ""); 		
			data = data.split(" ");
			gibberishArray.push(data);
			gibberishArray = _.flatten(gibberishArray);  
	    }); 

	    var hipsterText = textAPI.getHipsterIpsum();
	      	
	      hipsterText.then(function(response){
	    	var data = response.data.text.toLowerCase();
	   		data = data.replace(/\.|!|,|<[^>]*>|(&amp;)|(\r\n|\n|\r)|\s\s/gm, "");		 
			data = data.split(" ");	   		
			hipsterArray.push(data);
			hipsterArray = _.flatten(hipsterArray); 	      
	    });      
    });
})();