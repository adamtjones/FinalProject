(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('imageSearchController', function(API, $location, $stateParams) {
            var vm = this;

            vm.search = function() {

                var search = vm.getInfo;

                var data = API.getInfo(search, 125);
                data.then(function(response) {
                    vm.data = response.data.value[0];
                });

                var data1 = API.getInfo(search, 250);
                data1.then(function(response) {
                    vm.data1 = response.data.value[0];
                });

                var data2 = API.getInfo(search, 400);
                data2.then(function(response) {
                    vm.data2 = response.data.value[0];
                });

                var data3 = API.getInfo(search, 600);
                data3.then(function(response) {
                    vm.data3 = response.data.value[0];
                });
            };

            //code for abandoned Random Image Search functionality
            // var string_to_array = function(str) {
            //     return str.trim().split(" ");
            // };

            // var words =string_to_array("Nevada Colorado Utah Montana Arizona");

            // //var wordsArray = string_to_array;
            // var word = words[Math.floor(Math.random() * words.length)];
            // console.log(word);
        });
})();