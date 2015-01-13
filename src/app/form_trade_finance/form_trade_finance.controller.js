'use strict';

angular.module('ebo')
    .controller('FormTradeFinanceCtrl', function($scope, $rootScope, $translatePartialLoader, $translate) {        
    	
    	$scope.editingMode = false;

    	//Load our Language partial into the page
        $translatePartialLoader.addPart('form_trade_finance');
  		$translate.refresh();
    
    });