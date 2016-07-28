(function() {
    'use strict';
    angular
        .module('flowers')
        .factory('API', function($http) {

            function getInfo(image) {

                var call = $http({
                    headers: {
                        "Ocp-Apim-Subscription-Key": "da6b094ff8914d0597d301ebb935eefd",
                    },
                    method: 'GET',
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + image + "&count=4&height=250&width=250&aspect=square",
                });

                return call;
            }

            return {
                getInfo,
            }
        })
})();