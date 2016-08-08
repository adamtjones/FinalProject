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
                data.textArray = data.textInput.replace(/\.|!|,|<[^>]*>|(&amp;)|(\r\n|\n|\r)|\s\s/gm, "");
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
            
            var getArrays = function() {
                return $http ({
                  method: 'GET',
                  url: Backand.getApiUrl() + '/1/objects/action/items/15?name=getAll',
                  params: {}
                });
            }

<<<<<<< HEAD
            var saveImage = function(image){
                var gettingData = $http({
                    method: 'PUT',
                    image: image,
                    url: "https://api.backand.com:443/1/objects/items/userImages",
                });
                return gettingData;
=======
            var textVotes = function(id, textVotes) {
                console.log("COSOLE",parseInt(textVotes)+1);
                var data = {
                    'textVotes': parseInt(textVotes)+1,
                };
                return $http ({
                    method: 'PUT',
                    data:data,
                    url: 'https://api.backand.com:443/1/objects/items/'+ id,
                });
>>>>>>> c584265273e6d5558986e39be385299249355f04
            }

            return {
                registerUser: registerUser,
                login: login,
                getUserInfo: getUserInfo,
                saveArray: saveArray,
<<<<<<< HEAD
                saveImage,
=======
                getArrays: getArrays,
                textVotes: textVotes,
>>>>>>> c584265273e6d5558986e39be385299249355f04
            }

        });
})();