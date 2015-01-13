'use strict';

/**
 * @ngdoc service
 * @name ebo.localisation
 * @description
 * # fetch / push localisation options from ebo
 * Factory in ebo.
 */
angular.module('ebo')
    .factory('FirebaseService', function($q, $firebase) {

        var firebaseService = {};        

        //Fetches language data for specific page
        firebaseService.getPartialLanguageData = function(langCode) {    

            var deferred = $q.defer();

            var languageData = $firebase(new Firebase('https://ebury.firebaseio.com/localisation_modified/form_trade_finance/'+langCode)).$asObject();

            languageData.$loaded(function() {                
                deferred.resolve(languageData);
            });

            return deferred.promise;  
        
        };

        firebaseService.getAllCurrentLanguageData = function() {  

            var deferred = $q.defer();

            var languageData = $firebase(new Firebase('https://ebury.firebaseio.com/localisation')).$asObject();

            languageData.$loaded(function() {                
                deferred.resolve(languageData);
            });

            return deferred.promise;  

        };


        firebaseService.getAllModifiedLanguageData = function() {  

            var deferred = $q.defer();

            var languageData = $firebase(new Firebase('https://ebury.firebaseio.com/localisation_modified')).$asObject();

            languageData.$loaded(function() {                
                deferred.resolve(languageData);
            });

            return deferred.promise;  

        }; 



        return firebaseService;

    });