var app = angular.module("pricingApp", []); 
app.controller("pricingCtrl", function($scope) {
    cloudPrices = [
        {size : "1 Team", price : "$ 300"},
        {size : "2 Teams", price : "$ 600"},
        {size : "3 Teams", price : "$ 1200"},
        {size : "4 Teams", price : "$ 1600"},
        {size : "5 Teams", price : "$ 3000"},
        {size : "10 Teams", price : "$ 6000"},
        {size : "15 Teams", price : "$ 9000"},
        {size : "more Teams", price : "contact us"},
    ];
    serverPrices = [
        {size : "1 Team", price : "$ 900"},
        {size : "2 Teams", price : "$ 1200"},
        {size : "3 Teams", price : "$ 2000"},
        {size : "4 Teams", price : "$ 2400"},
        {size : "5 Teams", price : "$ 4200"},
        {size : "10 Teams", price : "$ 7200"},
        {size : "15 Teams", price : "$ 10200"},
        {size : "more Teams", price : "contact us"},
    ];

    $scope.setServer = function(){
        $scope.cloudActive = "";
        $scope.serverActive = "active"
        $scope.prices = serverPrices;
        $scope.infoLabel = "one-time payment"
        $scope.selectedPrice = $scope.prices[0]
    }

    $scope.setCloud = function(){
        $scope.cloudActive = "active";
        $scope.serverActive = ""
        $scope.prices = cloudPrices;
        $scope.infoLabel = "per year"
        $scope.selectedPrice = $scope.prices[0]
    }

    $scope.setCloud();

});