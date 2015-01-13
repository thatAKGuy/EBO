'use strict';

angular.module('ebo')
    .controller('ApprovalCtrl', function($scope, currentLanguageData, modifiedLanguageData) {
        //Tracks Button / Review state      
        $scope.sentForReview = false;

        //Assign the current and modifed data to scope for comparison
        $scope.currentLanguageData = currentLanguageData;
        $scope.modifiedLanguageData = modifiedLanguageData;

    
        // var flatten = function(data) {
        //     var result = {};

        //     function recurse(cur, prop) {
        //         if (Object(cur) !== cur) {
        //             result[prop] = cur;
        //         } else if (Array.isArray(cur)) {
        //             for (var i = 0, l = cur.length; i < l; i++)
        //                 recurse(cur[i], prop + "[" + i + "]");
        //             if (l == 0)
        //                 result[prop] = [];
        //         } else {
        //             var isEmpty = true;
        //             for (var p in cur) {
        //                 isEmpty = false;
        //                 recurse(cur[p], prop ? prop + "." + p : p);
        //             }
        //             if (isEmpty && prop)
        //                 result[prop] = {};
        //         }
        //     }
        //     recurse(data, "");
        //     return result;
        // }

      
    });