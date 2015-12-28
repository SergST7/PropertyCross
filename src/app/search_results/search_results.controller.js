
angular.module('myApp')
    .controller('searchResultsController', [ '$scope', '$location', 'dataService'  , function($scope, $location, dataService){

        $scope.data = dataService.data;

        $scope.back = function(){
            $location.path('/search-form')
        };

        if(!$scope.data) {  $scope.back() }
        else if (angular.isUndefined($scope.data.listings)) {
            $scope.errorMessage = 'Sorry, no results were found';
        }

        $scope.currentItemView = function(index){
            dataService.currentItem = index;
            console.log(index);
            $location.path('/property-listing');
        }


    }]);
