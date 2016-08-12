(function() {
    'use strict';
    
    angular
    .module('flowers')
    .controller('textController', function($state, textAPI,clipboard, API, back, $timeout) {

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
		vm.currentPage = 1;  

        //shows slightly different features when user is logged in
        var loggedIn = false;
    	if(API.getToken() !== null) {
        	vm.loggedIn = true;
        	vm.userId = API.getUserId();
        	vm.showMine = true;
        	vm.showAll = false
       	}
       	else {
       		vm.showAll = true;
       		vm.showMine = false;
       	} 	

       	//gets text arrays from backand database
       	var getTextArrays = back.getArrays();
       		getTextArrays.then(function(results){
          	var arrays = results.data;
          	vm.arrays = arrays;
          	vm.arrays.forEach(function(obj) {
          		if (obj.textVotes === null) {
          			obj.textVotes = 0;
          		}
          		if (obj.textArray != null) {
	          		obj.textArray = obj.textArray.split(" ");
	          		obj.textArray = obj.textArray.join(', ');
	          	}
	          	if (obj.author !== null) {
	          		obj.author = parseInt(obj.author);
	          	}
	          	// if (obj.author === vm.userId && obj.textArray === null){
	          	// 	vm.showAll = true;
	          	// 	vm.showMine = false;

	          	// }
          	})
        })

        //saves vote(favorited) counter to backand database
        vm.textVotes = function(arrays) {
        	var vote = back.textVotes(arrays.id, arrays.textVotes);
        	vote.then(function(response) {
        		console.log(response);
        		arrays.textVotes ++;
          });
        };  

       	//saves custom text arrays to backand database
       	vm.saveTextArray = function(){
        	var saveArray = back.saveArray(vm.form);
       
	        saveArray.then(function(response) {
				$('.modalSave').modal('hide');
				vm.saved = true;
				vm.alertFade();				
	        })
       	}

		//clipboard function so users can copy text
		vm.supported = false;
        vm.textToCopy = 'I can copy by clicking!';

        vm.success = function () {
        	clipboard.copyText(vm.form.textOutput);
				$('.modal').modal('hide');        	
				vm.copied = true;
				vm.alertFade();	
        };
        vm.fail = function (err) {
            console.error('Error!', err);
        };

        //changes showPercentages to true when item is selected
	    vm.percentageShower = function () {    
	        vm.showPercentage = false;
	        if (vm.form.checkbox.loremInput === true){
				vm.showPercentage = true;
			}
			if (vm.form.checkbox.gibberishInput === true){
				vm.showPercentage = true;
			}
			if (vm.form.checkbox.hipsterInput === true){
				vm.showPercentage = true;
			}
			if (vm.form.checkbox.baconInput === true){
				vm.showPercentage = true;	
			}
		}

		//puts saved arrays into the your text array textarea
		// shows notice, calls alertFade		
		vm.clickedBox = function(text){
			var newText = vm.form.textInput;
			var newerText = newText + " " +  text;
			vm.form.textInput = newerText;
			vm.selected = true;
			vm.alertFade();

		} 
		// fades alert boxes after 5 seconds
		vm.alertFade = function () {
			$timeout(function() {
				$(".alertFade").fadeTo(500, 0)
			}, 500);
			$timeout(function() {
	   		 	vm.selected = false;
	   		 	vm.saved = false;
	   		 	vm.copied = false;
	   		 	$(".alertFade").fadeTo(0, 500)
			}, 1000);
		}

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

		//calculates the percentage of selected arrays types based on user inputs,
		//gets called by writeTextArray
		vm.calPercentage = function(tempArray,wordLength){
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
			return tempArray;
		};

		//takes containerArray and creates textOutput based on user inputs
		var writeTextArray = function(){
			//sets default wordTotal to 200 if none is provided by user
			if (vm.form.wordTotal == null) {
				var wordLength = 200;
			}
			else {
				var wordLength = vm.form.wordTotal;
			}

			//calls function calPercentage(),
			//sets containerArray to tempArray for further changes
			var tempArray = JSON.parse(JSON.stringify(containerArray));
			
			// console.log("BEFORE:",JSON.stringify(tempArray));
			tempArray = vm.calPercentage(tempArray,wordLength);
			// console.log("AFTER",JSON.stringify(tempArray));

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

		//performs a soft reload when the reset function is called
		vm.reset = function() {
			$state.reload();
		};

		//calls the reset function when the text modal is closed
		$('#modal').on('hidden.bs.modal', function (e) {
 			vm.reset();
		})

		//gets random text based with word count when the random button is clicked
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