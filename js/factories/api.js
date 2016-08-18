(function() {
    'use strict';
    angular
        .module('flowers')
        .factory('API', function($http) {

            var getInfo = function(image, width, height) {

                var call = $http({
                    headers: {
                        "Ocp-Apim-Subscription-Key": "ed9ce55ba1b7454aa7326f5342e94ef7",
                                                      // 9c11996c1e134df38cbbd612bed6e3b2
                    },
                    method: 'GET',
                    url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + image + "&height=" + height + "&width=" + width,
                });

                return call;

            }

            var saveUserId = function(userid) {
                localStorage.setItem('userID', userid);
            }

            var getUserId = function() {
                return localStorage.getItem('userID');
            }
            var logout = function() {
                localStorage.removeItem('userID');
                localStorage.removeItem('token');
                return true;
            }
            var saveToken = function(token) {
                localStorage.setItem('token', token);
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

