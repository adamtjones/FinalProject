(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('imageSearchController', function(API, $location, $stateParams) {
            var vm = this;

            vm.search = function() {

                var search = vm.getInfo;

                var data = API.getInfo(search,200);
                data.then(function(response) {
                    vm.data = response.data.value[0];
                });

                var data1 = API.getInfo(search,350);
                data1.then(function(response) {
                    vm.data1 = response.data.value[0];
                });

                var data2 = API.getInfo(search,500);
                data2.then(function(response) {
                    vm.data2 = response.data.value[0];
                });

                var data3 = API.getInfo(search,750);
                data3.then(function(response) {
                    vm.data3 = response.data.value[0];
                });
            };

        });
})();