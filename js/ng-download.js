var app = angular.module("downloadApp", []);
app.controller("downloadCtrl", function($scope) {
    $scope.doShowiOS = false;

    $scope.toggleDesktop = function(){
        if ($scope.doShowiOS){
            $scope.doShowiOS = false;
        }else{
            $scope.doShowiOS = true;
        }
    }
});
