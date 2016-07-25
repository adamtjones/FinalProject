/*
      angular
      .module('newApp')
      .directive('location', function (API) {

  return {
    restrict: 'E', // Restrict to Element only
    scope: {},
    replace: true, // Replace as opposed as inserting into
    templateUrl:'./views/partials/results.html',
    transclude: true, // Will make sure any HTML inside of the directive element gets included

    // link method-boilerplate
    link: function (scope, element, attrs){
      var vm = scope;
      var country = attrs.country;
      var data = API.getInfo(country);
      data.then(function(response) {
        vm.data = response.data[0];
      });
      
    },

    // Standard Controller-boilerplate
    controller: function ($scope) {

    }
  };
});*/