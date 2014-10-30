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
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activePage: 'home',
        data: 'Main Home'
      })
      .when('/vision', {
        templateUrl: 'views/vision.html',
        controller: 'VisionCtrl',
        activePage: 'vision',
        data:'Our Vision'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activePage: 'about',
        data:'Projects: Bitsat'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        activePage: 'contact',
        data:'Get in Touch'
      })
      .otherwise({
        redirectTo: '/'
      });
  });




/**
angular.module( 'dunvegan', [
  'templates-app',
  'templates-common',
  'dunvegan.home',
  'dunvegan.about',
  'dunvegan.contact',
  'dunvegan.vision',
  'ui.router'
])
.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | DSS' ;
    }
  });
});

*/
