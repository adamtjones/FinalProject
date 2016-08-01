(function () {
	'use strict';
	angular
		.module('flowers')
		 .factory('textAPI', function($http) {

		 	var getLoremIpsum = function() {

			 	var gettingData = $http({
				  method: 'GET',
				  url : "http://www.randomtext.me/api/lorem/p-5/",
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

		 	var getGibberishIpsum = function () {
		 		var gettingData = $http ({
		 			method: 'GET',
		 			url: "http://www.randomtext.me/api/gibberish/p-5/",
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
		 		getGibberishIpsum: getGibberishIpsum,
		 		getHipsterIpsum: getHipsterIpsum,
		 	};

		 });
})();