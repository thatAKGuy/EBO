'use strict';

angular.module('ebo')
    .controller('ChameleonCtrl', function($scope, $rootScope) {

        var chameleonCtrl = this;
        
        $scope.saveChanges = function(config) {
            chameleonCtrl.saveCSS(config.CSS);
        };

        chameleonCtrl.saveCSS = function(cssObject) {
            var css = CSSJSON.toCSS(cssObject);
            console.log(css);

            var style = document.createElement("style");
                style.appendChild(document.createTextNode(css));
                document.head.appendChild(style);            
        };

    });