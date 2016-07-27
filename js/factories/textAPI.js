(function () {
	'use strict';
	angular
		.module('flowers')
		 .factory('textAPI', function($http) {

		 	var getLoremIpsum = function() {

			 	var gettingData = $http({
				  method: 'GET',
				  url : "http://loripsum.net/api/10/",
				});

				return gettingData;

		 	};

		 	var getBaconIpsum = function () {
		 		var gettingData = $http ({
		 			method: 'GET',
		 			url: "https://baconipsum.com/api/?type=all-meat",
		 		});

		 		return gettingData;

		 	};

		 	var getSkateIpsum = function () {
		 		var gettingData = $http ({
		 			method: 'GET',
		 			url: "http://skateipsum.com/get/5/0/JSON",
		 		});

		 		return gettingData;

		 	};

		 	var getHipsterIpsum = function () {
		 		var gettingData = $http ({
		 			method: 'GET',
		 			url: "http://hipsterjesus.com/api/",
		 		});

		 		return gettingData;

		 	};			 			 	

		 	return {
		 		getLoremIpsum: getLoremIpsum,
		 		getBaconIpsum: getBaconIpsum,
		 		getSkateIpsum: getSkateIpsum,
		 		getHipsterIpsum: getHipsterIpsum,


		 	};

		 
		 });
})();