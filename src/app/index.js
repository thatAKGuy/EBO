'use strict';

angular.module('ebo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'angular.css.injector','colorpicker.module'])
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

    })
    .controller('AppCtrl', function($rootScope, cssInjector, ConfigService) {

        $rootScope.currentTheme = 'ebury';

        //Dropdown Demo POC
        //Loads config and css file for specific brand
        $rootScope.$watch('currentTheme', function(brand) {

            if (brand === 'divisamoney') {

                ConfigService.fetchConfig(brand).then(function(response) {
                    $rootScope.config = response.data;
                });

                cssInjector.add('/assets/divisamoney/styles/theme.css');

            } else {
                
                ConfigService.fetchConfig('ebury').then(function(response) {
                    $rootScope.config = response.data;
                });

                cssInjector.removeAll();
            }
        });


    });