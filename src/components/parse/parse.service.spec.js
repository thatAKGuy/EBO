'use strict';

describe('Parse integration with Pang:', function(){
  var scope, pang, testVars = {};

  beforeEach(module('ebo'));

  beforeEach(inject(function($rootScope, _pang_) {
    scope = $rootScope.$new();
    pang = _pang_;
    testVars.pTest = parseInt(Math.random()*10000);
    pang.initialize(scope._PARSE_appID, scope._PARSE_jsKey);
  }));

  it('can set test', function(){
    scope.pangIntTest = pang.Collection('PangIntTest')  // get PangIntTest objects
                     .order('updatedAt')                // sort newest on bottom
                     .build();

    scope.pangIntTest.add({test: testVars.pTest});
  });

});