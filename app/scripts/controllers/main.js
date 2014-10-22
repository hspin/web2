'use strict';

/**
 * @ngdoc function
 * @name dunveganApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dunveganApp
 */
angular.module('dunveganApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
