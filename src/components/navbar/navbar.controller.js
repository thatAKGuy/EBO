'use strict';

angular.module('ebo')
  .controller('NavbarCtrl', function ($scope, $location, $state) {
    $scope.date = new Date();

    $scope.isActive = function(route){
    	return route === $location.path();
    };

    console.log($state.get());

  });
