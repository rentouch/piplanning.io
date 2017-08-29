var app = angular.module("pricingApp", ['angular-click-outside']);
app.controller("pricingCtrl", function($scope) {
    serverPrices = [
        {size : "Up to 10 teams", price : 8000, teams:10},
        {size : "15 Teams", price : 16000, teams: 15},
        {size : "20 Teams", price : 22500, teams: 20},
        {size : "30 Teams", price : 28000, teams: 30},
        {size : "45 Teams", price : 35000, teams: 45},
        {size : "60 Teams", price : 40000, teams: 60},
        {size : "90 Teams", price : 50000, teams: 90},
        {size : "91 and more", price : "contact us"},
    ];

    $scope.recalc = function(){
      // CLOUD
      if ($scope.cloudActive){
        teamSize = $scope.selectedTeamSize
        if(teamSize<6){
          $scope.price = 4000
          $scope.averagePricePerUser = $scope.price/5/40
          return
        }
        teamPrice = 1250
        if(teamSize>61){
          teamPrice = 600
        }
        if(teamSize>31){
          teamPrice = 750
        }
        if(teamSize>16){
          teamPrice = 1000
        }
        $scope.price = teamPrice*teamSize
        $scope.averagePricePerUser = teamPrice/40
        return
      }
      // SERVER
      if(typeof $scope.selectedPrice.price!="number"){
        $scope.averagePricePerUser = ""
        return
      }
      $scope.price = $scope.selectedPrice.price
      $scope.averagePricePerUser = Math.round($scope.selectedPrice.price/$scope.selectedPrice.teams/40)
    }

    $scope.setServer = function(){
        $scope.cloudActive = "";
        $scope.serverActive = "active"
        $scope.prices = serverPrices;
        $scope.selectedPrice = $scope.prices[0]
        $scope.recalc()
    }

    $scope.setCloud = function(){
        $scope.cloudActive = "active";
        $scope.serverActive = ""
        $scope.selectedTeamSize = 10
        $scope.recalc()
    }

    $scope.displayInfoBox = false;
    $scope.showInfo = function(){
      $scope.displayInfoBox = true;
    }
    $scope.hideInfo = function(){
      $scope.displayInfoBox = false;
    }

    $scope.setCloud();

});
