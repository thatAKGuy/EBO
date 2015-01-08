'use strict';

angular.module('ebo')
  .controller('MainCtrl', ['parseService', function (parseService) {
    parseService.fetch('testData').then(function(response){
    	console.log(response);
    })
  }]);
