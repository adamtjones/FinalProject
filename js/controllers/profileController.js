(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('profileController', function(API, $state, back, clipboard, $timeout, $location) {
            var vm = this;
            
            vm.showInfo = false; 
            vm.showText = false;
            vm.showPhoto = true;
                       
            vm.userId = API.getUserId();
            vm.textCounter = 0;
            vm.photoCounter = 0;

            vm.logout = function() {
                $location.path('home');   
            };

           if(API.getUserId() === null) {
            $state.go('login');
           }

            //gets users saved projects from backand
            var projects = back.getSavedInfo();
            projects.then(function(response) {
                
                vm.textCounter = 0;
                vm.photoCounter = 0;
                vm.textPresent = false;
                vm.photoPresent = false;
                
                vm.projects = response.data.data;
                vm.projects.forEach(function(obj) {
                    if (obj.textVotes === null) {
                        obj.textVotes = 0;
                    }
                    if (obj.textArray != null) {
                        obj.textArray = obj.textArray.split(" ");
                        obj.textArray = obj.textArray.join(', ');
                    }
                    if (obj.textArrayName !== null) {
                        vm.textCounter ++;
                    }
                    if (obj.searchTerm !== null) {
                        vm.photoCounter ++;
                    }                     
                })
                //shows a message to user if they don't have any saved photo or
                //text projects
                if (vm.textCounter > 0) {
                    vm.textPresent = true;
                }    
                if (vm.photoCounter > 0) {
                    vm.photoPresent = true;
                }
            })

            //gets users info from backand
            var user = back.getUserInfo(API.getToken());
            user.then(function(data) {
            vm.form = data.data.data[0];
            })

            //updates users info to backand
            vm.update = function() {
                var update = back.updateInfo(vm.userId, vm.form);
                update.then(function(response) {
                    vm.updated = true;
                    vm.alertFade();
                })
            }
            //deletes users saved items from backand
            vm.deleteItem = function(projects) {
                var deleteItem = back.deleteUserItems(projects.id);
                deleteItem.then(function(response) {
                    vm.projects = vm.projects.filter(function(item){
                    if(item!==projects){
                        return true;
                    }
                });
                    vm.deleted = true;
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
                    vm.deleted = false;
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

            vm.success = function (text) {
                // var url = text;
                // var imgTag = '<img src ="' + url + '">'
                clipboard.copyText(text);          
                    vm.copied = true;
                    vm.alertFade(); 
            };
            vm.fail = function (err) {
                console.error('Error!', err);
            };

        });
       
})();