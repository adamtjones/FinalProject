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
            };

        });
})();