(function() {
'use strict';

angular
    .module('flowers')
    .controller('mainController', function(API, $location) {
    	var vm = this;

            vm.search = function() {
                $location.path('/results/'+vm.searchImage);
            };
});
})();