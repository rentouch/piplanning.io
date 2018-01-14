var app = angular.module("pricingApp", ['angular-click-outside']);
app.controller("pricingCtrl", function($scope) {
    serverPrices = [
        {size : "Up to 10 teams", price : 14000, teams:10},
        {size : "15 Teams", price : 21000, teams: 15},
        {size : "20 Teams", price : 28000, teams: 20},
        {size : "30 Teams", price : 39000, teams: 30},
        {size : "45 Teams", price : 51750, teams: 45},
        {size : "60 Teams", price : 60000, teams: 60},
        {size : "90 Teams", price : 72000, teams: 90},
        {size : "91 and more", price : "contact us"},
    ];

    $scope.showContactUs = false;
    $scope.recalc = function(){
      // CLOUD
      if ($scope.cloudActive){
        $scope.showContactUs = false;
        teamSize = $scope.selectedTeamSize
        // 1-5 Teams
        if(teamSize<6){
          $scope.price = 4000
          $scope.averagePricePerUser = $scope.price/5/40
          return
        }
        // 6-15 Teams
        base = 0
        rangeBottom = 0
        teamPrice = 875
        // 16-30 Teams
        if(teamSize>15){
          rangeBottom = 15
          base = 13125
          teamPrice = 750
        }
        // 31-60 Teams
        if(teamSize>30){
          rangeBottom=30
          base = 24375
          teamPrice = 600
        }
        // > 60 Teams
        if(teamSize>60){
          rangeBottom=60
          base = 42375
          teamPrice = 400
        }
        $scope.price = base+teamPrice*(teamSize-rangeBottom)
        $scope.averagePricePerUser = teamPrice/40
        return
      }
      // SERVER
      if(typeof $scope.selectedPrice.price!="number"){
        $scope.averagePricePerUser = ""
        $scope.showContactUs = true;
        return
      }
      $scope.showContactUs = false;
      $scope.price = $scope.selectedPrice.price
      $scope.averagePricePerUser = Math.round($scope.selectedPrice.price/$scope.selectedPrice.teams/40)
    }

    $scope.setServer = function(){
        $scope.cloudActive = "";
        $scope.serverActive = "active"
        $scope.prices = serverPrices;
        $scope.selectedPrice = $scope.prices[0]
        $scope.recalc()
        $scope.showContactUs = false;
    }

    $scope.setCloud = function(){
        $scope.cloudActive = "active";
        $scope.serverActive = ""
        $scope.selectedTeamSize = 5
        $scope.recalc()
        $scope.showContactUs = false;
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
