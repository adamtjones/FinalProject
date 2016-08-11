(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('imageSearchController', function(API, $location, $stateParams, back) {
            var vm = this;

            vm.image1 = [];
            vm.image2 = [];
            vm.image3 = [];
            vm.image4 = [];

            vm.image1.width = 125;
            vm.image1.height = 125;

            vm.image2.width = 250;
            vm.image2.height = 250;

            vm.image3.width = 400;
            vm.image3.height = 400;

            vm.image4.width = 600;
            vm.image4.height = 600;

            //shows slightly different features when user is logged in
            var loggedIn = false;
                if(API.getToken() !== null) {
                    vm.loggedIn = true;
            }

            vm.search = function() {

                var search = vm.getInfo;


                var data = API.getInfo(search, vm.image1.height, vm.image1.width);
                data.then(function(response) {
                    vm.data = response.data.value[0];
                });

                var data1 = API.getInfo(search, vm.image2.height, vm.image2.width);
                data1.then(function(response) {
                    vm.data1 = response.data.value[0];
                });

                var data2 = API.getInfo(search, vm.image3.height, vm.image3.width);
                data2.then(function(response) {
                    vm.data2 = response.data.value[0];
                });

                var data3 = API.getInfo(search, vm.image4.height, vm.image4.width);
                data3.then(function(response) {
                    vm.data3 = response.data.value[0];
                });
            };

            vm.savePhotos = function() {
                var dateTime = new Date();

                var savedPhotos = {
                    author: API.getUserId(),
                    dateTime: dateTime,
                    savedImage1: vm.data.contentUrl,
                    savedImage2: vm.data1.contentUrl,
                    savedImage3: vm.data2.contentUrl,
                    savedImage4: vm.data3.contentUrl,
                    searchTerm: vm.getInfo,
                    savedImage1Width: vm.image1.width,
                    savedImage1Height: vm.image1.height,
                    savedImage2Width: vm.image2.width,
                    savedImage2Height: vm.image2.height,
                    savedImage3Width: vm.image3.width,
                    savedImage3Height: vm.image3.height,
                    savedImage4Width: vm.image3.width,
                    savedImage4Height: vm.image4.height,
                       
                }
                 
                var save = back.saveImage(savedPhotos);
                save.then(function(response) {
                    console.log(response);
                })
            }
        });
})();