var app = angular.module("downloadApp", []); 
app.controller("downloadCtrl", function($scope) {
    $scope.doShowDesktop = false;

    $scope.toggleDesktop = function(){
        if ($scope.doShowDesktop){
            $scope.doShowDesktop = false;
        }else{
            $scope.doShowDesktop = true;
        }
    }
});