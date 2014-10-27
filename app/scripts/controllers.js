'use strict';

angular.module('dunveganApp')
  .controller('MainCtrl', function ($scope) {
    $scope.pageTitle = 'Home' + ' | DSS' ;
  });

angular.module('dunveganApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.pageTitle = 'About' + ' | DSS' ;
  });
