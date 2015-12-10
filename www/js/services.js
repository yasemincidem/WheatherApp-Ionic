angular.module('starter.services', [])

.factory('CityFactory', function ($http) {
    var CityFactory = {};
 
    CityFactory.findTemp = function (lat,long) {

        return $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?',
            params: {
                lat:lat,
                lon :long,
                mode: 'json',
                appid: '2de143494c0b295cca9337e1e96b00e0'
            }
        })
    }
    return CityFactory;

});
