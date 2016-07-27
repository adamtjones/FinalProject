(function() {
    'use strict';
    angular
        .module('flowers')
        .factory('API', function($http) {

            function getInfo(image) {

            var call = $http({
            headers:{
                "Ocp-Apim-Subscription-Key":"da6b094ff8914d0597d301ebb935eefd",
            },

            method: 'GET',

            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + image,
            });

            return call;
            }

            var searchImage = function(search) {
                var data = $http({
                    method: 'GET',
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + search,
                });

                return data;

            }

            /*var searchPhoto = function(search) {
                var data = $http({
                    method: 'GET',
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + search +"&count=5&offset=0&mkt=en-us&safeSearch=Moderate",
                });

                return data;

            }

            /*function getPhoto(country) {
                var call = $http({
                    method: 'GET',
                    url: "https://restcountries.eu/rest/v1/name/" + country,
                });

                return call;
            }
            var postInfo = function(data) {
                var gettingData = $http({
                    method: 'POST',
                    data: data,
                    url: "https://api.backand.com:443/1/objects/posts",
                });

                return gettingData;
            }

            function getPopData() {
                var call = $http({
                    method:'GET',
                    url: "https://restcountries.eu/rest/v1/all",
                });

                return call;
            }*/
            
            return {
                getInfo,
<<<<<<< HEAD
                searchImage,
            }
        })
=======
                searchData,
                getPopData
            }*/
        });
>>>>>>> 26e44ae6887d590b4fcfb04d852248a6abdf0235
})();