'use strict';

angular.module('BreedModule', [
    'ngResource',
    'ngAnimate']);

// Define the `RandomDogsWebApp` module
angular.module('RandomDogsWebApp', [
    'ngRoute', 
    'BreedModule']);
