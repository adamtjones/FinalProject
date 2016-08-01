(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('loginController', function(API, $location, $stateParams, back) {
            var vm = this;
            
            vm.showAlert = false;

            if (API.getToken() !== null) {
                $stateParams.go('admin');
            }

            vm.submit = function() {

                var login = back.login(vm.form);

                login.then(function(results) {
                    if (results.data.data[0]) {
                        API.saveToken(results.data.data[0].token);
                        API.saveUserId(results.data.data[0].id);
                        vm.showAlert = false;
                        $stateParams.go('admin');
                    } else {
                        vm.showAlert = true;
                    }
                })
            }
        });
})();