 'use strict';

angular.module('ebo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });


    $urlRouterProvider.otherwise('/');

  }).run(function($rootScope){
     $rootScope._PARSE_appID = "1023fIXR5tCkVdTAhKKR3CbrYS8uYhsBR1igaF3q";
     $rootScope._PARSE_jsKey = "Aas0eLm0jbJZtJejunGS2tQnUxBlUtN6LnMiz7zB";
  })
;
