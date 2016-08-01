(function() {
    'use strict';
    angular
        .module('flowers')
        .factory('back', function($http, Backand, API) {

            var login = function(data) {

                var array = [{
                    "fieldName": "userName",
                    "operator": "equals",
                    "value": data.userName,
                }, {
                    "fieldName": "password",
                    "operator": "equals",
                    "value": data.password,
                }]

                return $http({
                    method: 'GET',
                    data: data,
                    url: Backand.getApiUrl() + "/1/objects/users",
                    params: {
                        filter: array,
                    }
                });
            }

            var registerUser = function(data) {

                data.token = randomString(64, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

                return $http({
                    method: 'POST',
                    data: data,
                    url: 'https://api.backand.com:443/1/objects/posts' + '/1/objects/users',
                });
            }
            return {

                registerUser,
                login
            }

        });
})();