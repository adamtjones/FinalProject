
(function() {
    'use strict';
    angular
<<<<<<< HEAD
        .module('flowers', ['ui.router','backand'])
=======
        .module('myApp', ['ui.router','backand'])
>>>>>>> 26e44ae6887d590b4fcfb04d852248a6abdf0235
        .config(function($stateProvider, $urlRouterProvider, BackandProvider) {

<<<<<<< HEAD
            //maybe don't need this:
            $urlRouterProvider.otherwise('/');*/

            $stateProvider
            .state('home', {
                    url: '/',
                    templateUrl: '/views/partials/imageSearch.html',
                    controller: 'mainController',
                    controllerAs: 'controller'
            })
            .state('results', {
                url: '/results/:country',
                templateUrl: '/views/partials/results.html',
                controller: 'resultsController',
                controllerAs: 'controller'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/views/partials/contact.html',
                controller: 'contactController',
                controllerAs: 'controller'
            })
            .state('chart', {
                url: '/chart',
                templateUrl: '/views/partials/chart.html',
                controller: 'chartController',
                controllerAs: 'controller'
            });
=======
            // BackandProvider.setAppName('newcountryapp');
            // BackandProvider.setSignUpToken('33f05d38-2137-4ca2-bcb8-303b7565b94f');
            // BackandProvider.setAnonymousToken('6a7fe20f-21d2-4abd-a727-e1388c2d72ad');

>>>>>>> 26e44ae6887d590b4fcfb04d852248a6abdf0235

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