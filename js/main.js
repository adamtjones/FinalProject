
(function() {
    'use strict';
    angular
        .module('flowers', ['ui.router','backand'])

        .config(function($stateProvider, $urlRouterProvider, BackandProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('home', {
                    url: '/',
                    templateUrl: '/views/home.html',
                    controller: 'homeController',
                    controllerAs: 'controller'
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
            .state('contact', {
                url: '/contact',
                templateUrl: '/views/partials/contact.html',
                controller: 'contactController',
                controllerAs: 'controller'
            })
            .state('results', {
                url: '/results',
                templateUrl: '/views/partials/results.html',
                controller: 'resultsController',
                controllerAs: 'controller'
            })
            .state('imageSearch', {
                url: '/imageSearch',
                views: {
                    'main': {
                        templateUrl: '../views/partials/imageSearch.html',
                        controller: 'textController',
                        controllerAs: 'controller'
                    }
             
            },
                controller: 'mainController',
                controllerAs: 'controller'
            });
        });
    })();
            