angular.module('myApp')
    .controller('propertyListingController', myCtrl1);

//@ngInject
function myCtrl1($scope, $location, dataService) {

    $scope.data = dataService.currentItem;

    $scope.back = function () {
        $location.path('/search-results')
    };

    if (angular.isUndefined($scope.data.datasource_name)) {
        $location.path('/search-form')
    }
};

