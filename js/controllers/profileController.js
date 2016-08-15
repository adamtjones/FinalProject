(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('profileController', function(API, $state, back, clipboard, $timeout) {
            var vm = this;
            vm.userId = API.getUserId();

            var projects = back.getSavedInfo();
            projects.then(function(response) {
                var projects = response.data.data;
                vm.projects = projects;
                vm.projects.forEach(function(obj) {
                    if (obj.textVotes === null) {
                        obj.textVotes = 0;
                    }
                })
            })

            var user = back.getUserInfo(API.getToken());
            user.then(function(data) {
            vm.form = data.data.data[0];
            })

            vm.update = function() {
                var update = back.updateInfo(vm.userId, vm.form);
                update.then(function(response) {
                    vm.updated = true;
                    vm.alertFade();
                })
            }

            // fades alert boxes after 5 seconds
            vm.alertFade = function () {
                $timeout(function() {
                    $(".alertFade").fadeTo(500, 0)
                }, 500);
                $timeout(function() {
                    vm.updated = false;
                    vm.copied = false;
                    $(".alertFade").fadeTo(0, 500)
                }, 1000);
            }

            //clipboard function so users can copy text
            vm.supported = false;
            vm.textToCopy = 'I can copy by clicking!';

            vm.success = function (text) {
                var url = text;
                var imgTag = '<img src ="' + url + '">'
                clipboard.copyText(imgTag);          
                    vm.copied = true;
                    vm.alertFade(); 
            };
            vm.fail = function (err) {
                console.error('Error!', err);
            };

        });
       
})();