angular.module('starter.controllers', [])

.controller('CityCtrl', function ($scope, CityFactory, $location, $ionicHistory) {
	$scope.data = {};
    var long = {};
    var lat = {};
    navigator.geolocation.getCurrentPosition(function (data) {
        lat = data.coords.latitude;
        long = data.coords.longitude;
    })
    $scope.myGoBack = function () {
    	$ionicHistory.goBack();
    };
    $scope.temperature = function () {
        CityFactory.findTemp(lat,long).success(function (data) {
        	$location.path('/tab/temp');
        	console.log(data);
        	CityFactory.data = data;
        }).error(function (err, statusCode) {
            console.log(err);
        });
    }
})
.controller('TempCtrl', function ($scope, CityFactory) {
	$scope.name = CityFactory.data.name;
	$scope.temp = CityFactory.data.main.temp - 273;
	$scope.maxTemp = CityFactory.data.main.temp_max - 273;
	$scope.minTemp = CityFactory.data.main.temp_min - 273;
	$scope.weatherStation = CityFactory.data.weather[0].icon;
	$scope.weatherdesc = CityFactory.data.weather[0].description;
	$scope.humidity = CityFactory.data.main.humidity;
	$scope.windSpeed = CityFactory.data.wind.speed;
	$scope.windDeg = CityFactory.data.wind.deg;



})

