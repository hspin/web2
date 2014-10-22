'use strict';

/**
 * @ngdoc function
 * @name dunveganApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dunveganApp
 */
angular.module('dunveganApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
