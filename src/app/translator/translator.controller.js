'use strict';

angular.module('ebo')
    .controller('TranslatorCtrl', function($scope, $rootScope, $firebase, FirebaseService) {
        
        //Tracks Button / Review state      
        $scope.sentForReview = false;

        //Sends a request to be reviewed by a moderator
        $scope.sendForReview = function(){
                FirebaseService.sendReviewRequest();
        };        


        //Change Language on our dropdown menu
        $rootScope.$watch('currentLanguage', function(langKey) {
            
            var self = this;

            if (self.languageData) {
                self.languageData.$destroy();
            }

            FirebaseService.getPartialLanguageData(langKey).then(function(languageDataResponse) {
                self.languageData = languageDataResponse;
                self.languageData.$bindTo($scope, 'languageData');
            });    
        });

    });