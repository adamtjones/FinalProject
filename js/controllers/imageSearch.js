(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('mainController', function(API, $location, $stateParams) {
            var vm = this;

            vm.search = function() {
                /*$location.path('/results/'+vm.searchImage);*/

                var search = vm.getInfo;

                var data = API.getInfo(search);
                data.then(function(response) {
                    vm.data = response.data.value;
                });

                //var data1 = API.getInfo(search);
                //data1.then(function(response) {
                    //vm.data1 = response.data.value;
                //});
            };

        });
})();