(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('imageSearchController', function(API, $location, $stateParams) {
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
        });
})();