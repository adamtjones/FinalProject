
(function() {
    'use strict';
    angular
        .module('myApp', ['ui.router','backand'])
        .config(function($stateProvider, $urlRouterProvider, BackandProvider) {

            // BackandProvider.setAppName('newcountryapp');
            // BackandProvider.setSignUpToken('33f05d38-2137-4ca2-bcb8-303b7565b94f');
            // BackandProvider.setAnonymousToken('6a7fe20f-21d2-4abd-a727-e1388c2d72ad');


        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state('home', {
        url: '/',
        views: {
            'main': {
                templateUrl: '../views/home.html',
                controller: 'mainController',
                controllerAs: 'controller'
              }
          },
        });
    });
})();
            // .state('results', {
            //     url: '/results/:country',
            //     templateUrl: '/views/partials/results.html',
            //     controller: 'resultsController',
            //     controllerAs: 'controller'
            // })
            // .state('contact', {
            //     url: '/contact',
            //     templateUrl: '/views/partials/contact.html',
            //     controller: 'contactController',
            //     controllerAs: 'controller'
            // })
            // .state('chart', {
            //     url: '/chart',
            //     templateUrl: '/views/partials/chart.html',
            //     controller: 'chartController',
            //     controllerAs: 'controller'
            // });