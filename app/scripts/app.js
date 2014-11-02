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
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activePage: 'home',
        title: 'Home | DSS'
      })
      .when('/vision', {
        templateUrl: 'views/vision.html',
        controller: 'VisionCtrl',
        activePage: 'vision',
        title:'Our Vision | DSS'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        activePage: 'about',
        title:'Projects: Bitsat | DSS'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        activePage: 'contact',
        title:'Get in Touch | DSS'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular
  .module('dunveganApp')
  .run(function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
      $rootScope.pageTitle = $route.current.title
    })
  });

