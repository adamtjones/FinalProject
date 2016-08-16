(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('headerController', function(API, back, $state, $location) {
            var vm = this;
                            console.log($location.path());
            var loggedIn = false;

            if (API.getToken() !== null) {
                vm.loggedIn = true;
            }

            var call = back.getUserInfo(API.getToken());
            call.then(function(data) {
                vm.user = data.data.data[0];
            })

            vm.logout = function() {
                API.logout();
                if ($location.path() === '/home') {
                    $state.reload();
                }
                else {
                    $location.path('home');
                }    
            };
        });
})();