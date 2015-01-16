'use strict';

angular.module('ebo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'angular.css.injector', 'colorpicker.module', 'base64', 'naif.base64'])
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

    //Fetches the current config and theme for a brand
    var fetchTheme = function(brand) {
        ConfigService.fetchConfig(brand).then(function(response) {
            $rootScope.config = response.data;
            addCSS(response.data.brandCSS);
        });
    };

    //Appends CSS string to head
    var addCSS = function(css) {
        var head = angular.element(document.getElementsByTagName('head')[0]);
        head.append('<style>' + css + '</style>');
    };

    //Dropdown Demo POC
    //Loads config and css file for specific brand    
    $rootScope.$watch('currentTheme', function(brand) {
        fetchTheme(brand);        
    });

});