(function() {
    'use strict';
    angular
        .module('flowers', ['ui.router', 'backand'])

    .config(function($stateProvider, $urlRouterProvider, BackandProvider) {

        $urlRouterProvider.otherwise('/');

            BackandProvider.setAppName('finalproject');
            BackandProvider.setSignUpToken('a77a0d3e-cc54-4b8e-95ea-ecd2e424897f');
            BackandProvider.setAnonymousToken('1122b21c-12db-4f88-b28b-a6da4138655e');


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
            .state('login', {
                url: '/login',
                views: {
                    'main': {
                        templateUrl: '../views/partials/login.html',
                        controller: 'loginController',
                        controllerAs: 'controller'
                    }
                },
            })
            .state('register', {
                url: '/register',
                views: {
                    'main': {
                        templateUrl: '../views/partials/register.html',
                        controller: 'registerController',
                        controllerAs: 'controller'
                    }
                },
            });

    });
})();