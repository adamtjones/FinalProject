(function() {
    'use strict';
    angular
        .module('flowers')
        .factory('back', function($http, Backand, API) {

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

            var getUserInfo = function(data) {
                var tokenArray = [{
                    "fieldName" : "token", 
                    "operator" : "equals",
                    "value" : data,
                }]
                return $http ({
                    method: 'GET',
                    url: 'https://api.backand.com:443/1/objects/users',
                    params: {
                        filter:tokenArray,
                    }
                });
            }

            var saveArray = function(data){
                data.dateTime = new Date();
                data.author = parseInt(API.getUserId());
                var textInput = data.textInput.toLowerCase();
                data.textArray = textInput.replace(/\.|!|,|<[^>]*>|(&amp;)|(\r\n|\n|\r)|\s\s/gm, "");
                var data = {
                    textArrayName: data.textArrayName,
                    textArray: data.textArray,
                    dateTime: data.dateTime,
                    author: data.author,
                    isTextArrayPrivate: data.isTextArrayPrivate,
                }
                return $http ({
                  method: 'POST',
                  data:data,
                  url: Backand.getApiUrl() + '/1/objects/items',
                });
            }

            return {
                registerUser: registerUser,
                login: login,
                getUserInfo: getUserInfo,
                saveArray: saveArray,
            }

        });
})();