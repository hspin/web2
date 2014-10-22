'use strict';

/**
 * @ngdoc overview
 * @name dunveganApp
 * @description
 * # dunveganApp
 *
 * Main module of the application.
 */
angular
  .module('dunveganApp', [
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
