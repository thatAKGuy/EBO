'use strict';

describe('current date on nav bar:', function(){
  var scope;

  beforeEach(module('ebo'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

  it('should contain current year', inject(function($controller) {
    $controller('NavbarCtrl', {
      $scope: scope
  	});

    var akYear = 2015;
    expect(scope.date.getFullYear()).toEqual(akYear);
  }));
});