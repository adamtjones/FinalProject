(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('resultsController', function(API, $stateParams) {
            var vm = this;

            var country = $stateParams.country;

            var data = API.getInfo(country);
            data.then(function(response) {
                vm.data = response.data[0];
            });
        });
})();