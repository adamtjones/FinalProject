(function() {
    'use strict';
    angular
        .module('flowers', ['ui.router', 'backand'])

    .config(function($stateProvider, $urlRouterProvider, BackandProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'main': {
                        templateUrl: '../views/home.html',
                        controller: 'textController',
                        controllerAs: 'controller'
                    }
                },
            })
            .state('text', {
                url: '/text',
                views: {
                    'main': {
                        templateUrl: '../views/text.html',
                        controller: 'textController',
                        controllerAs: 'controller'
                    }
                },
            })
            .state('imageSearch', {
                    url: '/imageSearch',
               views: {
                    'main': {
                        templateUrl: '../views/partials/imageSearch.html',
                        controller: 'mainController',
                        controllerAs: 'controller'
                    }
                },
            })           
            .state('contact', {
                url: '/contact',
                templateUrl: '/views/partials/contact.html',
                controller: 'contactController',
                controllerAs: 'controller'
            })
            .state('results', {
                url: '/results/:country',
                templateUrl: '/views/partials/results.html',
                controller: 'resultsController',
                controllerAs: 'controller'
            })
            .state('imageSearch', {
                    url: '/imageSearch',
                    views: {
                        'main': {
                            templateUrl: '../views/partials/imageSearch.html',
                            controller: 'mainController',
                            controllerAs: 'controller'
                }
            },
        );

    });
})();

