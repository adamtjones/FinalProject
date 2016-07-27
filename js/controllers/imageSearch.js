(function() {
'use strict';

angular
    .module('flowers')
    .controller('mainController', function(API, $location) {
            var vm = this;

            vm.search = function() {
                /*redirect for entry in input box*/
                $location.path('/results/'+vm.searchImage);
            };
});
})();