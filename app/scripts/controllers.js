'use strict';

angular.module('dunveganApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.pageTitle = 'Home' + ' | DSS' ;
  });

angular.module('dunveganApp')
  .controller('VisionCtrl', function ($scope) {
    $scope.pageTitle = 'Vision' + ' | DSS' ;
  });

angular.module('dunveganApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.pageTitle = 'About' + ' | DSS' ;
  });

angular.module('dunveganApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.pageTitle = 'Contact' + ' | DSS' ;
  });

angular.module('dunveganApp')
  .controller('navCtrl', function ($scope, $route) {
    //we set $route to  we have access to it in the HTML
    $scope.$route = $route;
  });

