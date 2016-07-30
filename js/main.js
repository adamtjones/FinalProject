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
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/views/partials/contact.html',
                controller: 'contactController',
                controllerAs: 'controller'
            });

    });
})();