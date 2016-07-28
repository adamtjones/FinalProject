(function() {
'use strict';

angular
    .module('flowers')
    .controller('mainController', function(API, $location) {

            vm.search = function() {
                $location.path('/results/'+vm.searchImage);
            };
});
})();