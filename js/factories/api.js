(function() {
    'use strict';
    angular
        .module('flowers')
        .factory('API', function($http) {

            var getInfo = function(image) {

                var call = $http({
                    headers: {
                        "Ocp-Apim-Subscription-Key": "da6b094ff8914d0597d301ebb935eefd",
                    },
                    method: 'GET',
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + image + "&count=4&height=250&width=250&aspect=square",
                });

                return call;
            }
            var saveUserId = function(userid)
            {
                localStorage.setItem('userID',userid);
            }

            var getUserId = function()
            {
                return localStorage.getItem('userID');
            }
            var logout = function()
            {
                localStorage.removeItem('userID');
                localStorage.removeItem('token');
                return true;
            }
            var saveToken = function(token)
                        {
                            localStorage.setItem('token',token);
                        }
            var getToken = function() {
                return localStorage.getItem('token');
            }




            return {
                getInfo,
                saveUserId,
                getUserId,
                logout,
                saveToken,
                getToken,
            }
        })
})();