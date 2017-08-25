var app = angular.module("pricingApp", []);
app.controller("pricingCtrl", function($scope) {
    cloudPrices = [
        {size : "5 Teams", price : "$ 4000"},
        {size : "10 Teams", price : "$ 12,500"},
        {size : "15 Teams", price : "$ 18,750"},
        {size : "30 Teams", price : "$ 30,000"},
        {size : "60 Teams", price : "$ 45,000"},
        {size : "more Teams", price : "contact us"},
    ];
    serverPrices = [
        {size : "Up to 10 teams", price : "$ 8,000"},
        {size : "15 Teams", price : "$ 16,000"},
        {size : "20 Teams", price : "$ 22,500"},
        {size : "30 Teams", price : "$ 28,000"},
        {size : "45 Teams", price : "$ 35,000"},
        {size : "60 Teams", price : "$ 40,000"},
        {size : "90 Teams", price : "$ 50,000"},
        {size : "91 and more", price : "contact us"},
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
