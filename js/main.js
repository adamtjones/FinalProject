
(function() {
    'use strict';
    angular
        .module('flowers', ['ui.router','backand'])

        .config(function($stateProvider, $urlRouterProvider, BackandProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('imageSearch', {
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
        })
    })();
            