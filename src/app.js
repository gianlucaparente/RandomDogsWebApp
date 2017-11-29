'use strict';

// Define the `RandomDogsWebApp` module
let RandomDogsWebApp = angular.module('RandomDogsWebApp', ['ngRoute', 'BreedModule']);

RandomDogsWebApp.config(['$routeProvider', ($routeProvider) => {
  $routeProvider.
    when('/dashboard', {
      templateUrl: 'src/partials/dashboard'
    }).
    otherwise('/dashboard');
}]);