(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('profileController', function(API, $state, back, clipboard, $timeout) {
            var vm = this;

            var projects = back.getSavedPhotos();
            projects.then(function(response) {
                var projects = response.data.data;
                vm.projects = projects;
                
                })

            // fades alert boxes after 5 seconds
            vm.alertFade = function () {
                $timeout(function() {
                    $(".alertFade").fadeTo(500, 0)
                }, 500);
                $timeout(function() {
                    vm.selected = false;
                    vm.saved = false;
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