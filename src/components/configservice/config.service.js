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
            return $http.get('config/'+brand+'.json');                    
        };

        return configService;
    
    });