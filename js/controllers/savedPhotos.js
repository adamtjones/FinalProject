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

                // if (projects.savedImage1 === null){
                //     //vm.savedImage = null;
                //     console.log("no images found");
                // }
                // else {
                //     console.log("found images");
                // }

                })


            });
       
})();