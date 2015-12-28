angular
    .module('myApp')
    .controller('searchController', myCtrl);

//@ngInject
function myCtrl($scope, $http, $location, networkService, dataService) {

    $scope.data = {
        errorMessage: null,
        city: "",
        loader: false
    };

    $scope.clearError = function () {
        $scope.data.errorMessage = null;
        $scope.data.city = '';
    };

    $scope.onSubmit = function () {
        $scope.data.loader = true;
        networkService.getData($scope.city)

            .success(function (data) {
                dataService.data = data.response;
                console.log(dataService.data);
                $location.path('/search-results');
            })
            .error(function () {
                $scope.data.errorMessage = 'There was a problem with your search';
            })
            .finally(function () {
                $scope.data.loader = false;
            })
    };

};
