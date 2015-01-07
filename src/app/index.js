'use strict';

angular.module('ebo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
      	url: '/about',
      	templateUrl: 'app/about/about.html',
      	controller: 'AboutCtrl'
      })
      .state('about.test', {
      	url: '/test', 
      	templateUrl: 'app/about/about.html',
      	controller: 'AboutCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
