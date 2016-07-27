
(function() {
    'use strict';
    angular
        .module('flowers', ['ui.router','backand'])

        .config(function($stateProvider, $urlRouterProvider, BackandProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('home', {
                    url: '/',
                    templateUrl: '/views/partials/imageSearch.html',
                    controller: 'mainController',
                    controllerAs: 'controller'
            })
            .state('main', {
                url: '/text',
                templateUrl: '/views/text.html',
                controller: 'textController',
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
        });
    })();
            