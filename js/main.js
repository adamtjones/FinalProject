(function() {
    'use strict';
    angular
    .module('flowers', ['ui.router', 'backand', 'angular-clipboard', 'angularUtils.directives.dirPagination'])

    .config(function(BackandProvider,$stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        BackandProvider.setAppName('finalproject');
        BackandProvider.setSignUpToken('a77a0d3e-cc54-4b8e-95ea-ecd2e424897f');
        BackandProvider.setAnonymousToken('1122b21c-12db-4f88-b28b-a6da4138655e');
  
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: '../views/text.html',
                        controller: 'textController',
                        controllerAs: 'controller'
                    },
                    'imageSearch': {
                        templateUrl: '../views/imageSearch.html',
                        controller: 'imageSearchController',
                        controllerAs: 'vm',  
                    },
                    'header': {
                        templateUrl: '../views/partials/header.html',
                        controller: 'headerController',
                        controllerAs: 'controller',
                    },
                },
            })
            .state('profile', {
                url:'/profile',
                views: {
                    'main': {
                        templateUrl: '../views/partials/savedPhotos.html',
                        controller: 'savedPhotosController',
                        controllerAs: 'controller'
                    },
                    'header': {
                        templateUrl: '../views/partials/header.html',
                        controller: 'headerController',
                        controllerAs: 'controller',
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
                    },
                    'header': {
                        templateUrl: '../views/partials/header.html',
                        controller: 'headerController',
                        controllerAs: 'controller',
                    },
                },
            })
            .state('register', {
                url: '/register',
                views: {
                    'main': {
                        templateUrl: '../views/partials/register.html',
                        controller: 'registerController',
                        controllerAs: 'controller'
                    },
                    'header': {
                        templateUrl: '../views/partials/header.html',
                        controller: 'headerController',
                        controllerAs: 'controller',
                    },
                },
            });

    });
})();