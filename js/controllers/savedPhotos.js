(function() {
    'use strict';

    angular
        .module('flowers')
        .controller('savedPhotosController', function(API, $state, back) {
            var vm = this;


            var projects = back.getSavedPhotos();
            projects.then(function(response) {
                console.log(response);
                var projects = response.data.data;
                vm.projects = projects;

                if (projects.savedImage1 === undefined && projects.savedImages2 === undefined && projects.savedImages3 === undefined && projects.savedImages4 === undefined){
                    vm.jones = null
                }
                else {
                    console.log(projects.savedImage1)
                }

                })


            });
       
})();