'use strict';

angular.module('ebo', ['ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'firebase'
])
    .config(function($stateProvider, $urlRouterProvider, $translateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('form', {
                url: '/form',
                templateUrl: 'app/form_trade_finance/form_trade_finance.html',
                controller: 'FormTradeFinanceCtrl'
            })
            .state('translator', {
                url: '/translator',
                templateUrl: 'app/translator/translator.html',
                controller: 'TranslatorCtrl'
            })
            .state('approval', {
                url: '/approval',
                templateUrl: 'app/approval/approval.html',
                controller: 'ApprovalCtrl',
                resolve: {
                    currentLanguageData: function(FirebaseService) {
                        return FirebaseService.getAllCurrentLanguageData();
                    },
                    modifiedLanguageData: function(FirebaseService) {
                        return FirebaseService.getAllModifiedLanguageData();
                    }
                }
            });

        $urlRouterProvider.otherwise('/');


        //Setup path and namespace to our localisation folder

        // https://ebury.firebaseio.com/localisation/{part}/{lang}.json
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/localisation/{part}/{lang}.json'
        });

        //Set our default language
        $translateProvider.determinePreferredLanguage();

    })

.run(function($rootScope, $translate) {

    //Current Language Code; 
    $rootScope.currentLanguage = $rootScope.currentLanguage || 'en';

    //Change the language on dropdown option
    $rootScope.$watch('currentLanguage', function(langKey) {
        $translate.use(langKey);
    });

});