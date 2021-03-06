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
                if (data.isPrivate == null) {
                    data.isPrivate = false;
                }
                var data = {
                    textArrayName: data.textArrayName,
                    textArray: data.textArray,
                    dateTime: data.dateTime,
                    author: data.author,
                    isPrivate: data.isPrivate,
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
                    url: Backand.getApiUrl() + '/1/objects/action/items/17?name=getAll',
                    params: {}
                }); 
            }

            var saveImage = function(image){
                var gettingData = $http({
                    method: 'POST',
                    data: image,
                    url: "https://api.backand.com:443/1/objects/items/",
                });
                return gettingData;
            }

            var getSavedInfo = function(){
                var author = API.getUserId()*1;
                var gettingData = $http({
                    method: 'GET',
                    url: "https://api.backand.com:443/1/objects/items?filter=%5B%20%7B%20%20%20%20%22fieldName%22%3A%20%22author%22%2C%20%20%20%20%22operator%22%3A%20%22in%22%2C%20%20%20%20%22value%22%3A%20"+author+"%20%20%7D%5D",

                });
                return gettingData;
            }    

            var textVotes = function(id, textVotes) {
                var data = {
                    'textVotes': parseInt(textVotes)+1,
                };
                return $http ({
                    method: 'PUT',
                    data:data,
                    url: 'https://api.backand.com:443/1/objects/items/'+ id,
                });
            }

            var updateInfo = function(id, data) {
                return $http ({
                    method: 'PUT',
                    data:data,
                    url: 'https://api.backand.com:443/1/objects/users/'+ id,
                });
            }

            var deleteUserItems = function (id) {
                return $http ({
                    method: 'DELETE',
                    url: 'https://api.backand.com:443/1/objects/items/'+ id,

                })
            }

            return {
                registerUser: registerUser,
                login: login,
                getUserInfo: getUserInfo,
                saveArray: saveArray,
                saveImage: saveImage,
                getArrays: getArrays,
                textVotes: textVotes,
                getSavedInfo: getSavedInfo,
                updateInfo: updateInfo,
                deleteUserItems: deleteUserItems
            }
        })        
})();

