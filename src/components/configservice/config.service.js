'use strict';

/**
 * @ngdoc service
 * @name bluehiveApp.vote
 * @description
 * # vote
 * Factory in the bluehiveApp.
 */
angular.module('ebo')
    .factory('ConfigService', function($http) {

        var configService = {};

        configService.fetchConfig = function(brand) {
            return $http.get('https://ebury.firebaseio.com/config/'+brand+'.json');                    
        };

        configService.postConfig = function(brand, data) {        	
            return $http.put('https://ebury.firebaseio.com/config/'+brand+'.json', data);                    
        };        

        return configService;
    
    });