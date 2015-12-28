
angular
    .module('myApp', [
        'ngMessages',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
     $routeProvider
        .when('/search-form', {
            templateUrl: 'app/search_form/search_form.template.html',
            controller: 'searchController'
        })
        .when('/search-results', {
            templateUrl: 'app/search_results/search_results.template.html',
            controller: 'searchResultsController'
        })
        .when('/property-listing', {
            templateUrl: 'app/property_listing/property_listing.template.html',
            controller: 'propertyListingController'
        })
        .otherwise({
            redirectTo: '/search-form'
        });
});


