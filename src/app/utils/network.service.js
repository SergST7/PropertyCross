
angular
    .module('myApp')
    .service('networkService',  function ($http) {
        this.getData = function (locationStr) {
            return $http({
                method: 'GET',
                url: 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=' +
                'search_listings&encoding=json&listing_type=buy&page=1&place_name=' + locationStr
            });
        };
    });
