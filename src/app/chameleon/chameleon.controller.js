'use strict';

angular.module('ebo')
    .controller('ChameleonCtrl', function($scope, $rootScope, ConfigService) {

        var chameleonCtrl = this;

        //Fetches the current config and theme for a brand
        chameleonCtrl.fetchTheme = function(brand) {
            ConfigService.fetchConfig(brand).then(function(response) {
                $scope.CSS = CSSJSON.toJSON(response.data.brandCSS);
                $scope.theme = response.data.theme;
                $scope.logo = response.data.logo;
                console.log(response.data.logo);
            });
        };

        $scope.uploadFile = function(image){                        
            console.log(image);        
            $scope.logo = 'data:'+image.filetype+';base64,'+image.base64;        

            console.log($scope.logo);
        };

        //Appends CSS string to head
        $scope.saveChanges = function(css, theme) {

            $rootScope.config.brandCSS = CSSJSON.toCSS(css).replace(/(\r\n|\n|\t|\r)/gm,' ');
            $rootScope.config.theme = theme;
            $rootScope.config.logo = $scope.logo;


            ConfigService.postConfig($rootScope.currentTheme, $rootScope.config).then(function(res){
                console.log(res);
            });

            // $rootScope.config.logo = 
            var head = angular.element(document.getElementsByTagName('head')[0]);
            head.append('<style>' + CSSJSON.toCSS(css) + '</style>');
        };

        $rootScope.$watch('currentTheme', function(brand) {
            chameleonCtrl.fetchTheme(brand);
        });



    });