'use strict';

angular.module('ebo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            }).
        state('form_trade_finance', {
            url: '/form_trade_finance',
            templateUrl: 'app/form_trade_finance/form_trade_finance.html',
            controller: 'FormTradeFinanceCtrl'
        })
        .state('chameleon', {
            url: '/chameleon',
            templateUrl: 'app/chameleon/chameleon.html',
            controller: 'ChameleonCtrl'
        });
        
        $urlRouterProvider.otherwise('/');
        
    });