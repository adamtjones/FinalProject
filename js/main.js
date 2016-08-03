(function() {
    'use strict';
    angular
    .module('flowers', ['ui.router', 'backand', 'angular-clipboard'])

    .config(function(BackandProvider,$stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        BackandProvider.setAppName('finalproject');
        BackandProvider.setSignUpToken('a77a0d3e-cc54-4b8e-95ea-ecd2e424897f');
        BackandProvider.setAnonymousToken('1122b21c-12db-4f88-b28b-a6da4138655e');
  
        $stateProvider
            .state('text', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: '../views/text.html',
                        controller: 'textController',
                        controllerAs: 'controller'
                    },
                    'imageSearch': {
                        templateUrl: '../views/partials/imageSearch.html',
                        controller: 'imageSearchController',
                        controllerAs: 'vm',
                    },
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