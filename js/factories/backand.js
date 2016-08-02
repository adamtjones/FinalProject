(function() {
    'use strict';
    angular
        .module('flowers')
        .factory('back', function($http, Backand) {

            var login = function(data) {

                var array = [{
                    "fieldName": "email",
                    "operator": "equals",
                    "value": data.email,
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
                    url: Backand.getApiUrl() + '/1/objects/users',
                });
            }
            function randomString(length, chars) {
                var result = '';
                for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
                return result;
            }
            return {

                registerUser,
                login
            }

        });
})();