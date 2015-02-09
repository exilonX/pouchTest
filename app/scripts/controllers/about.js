'use strict';

/**
 * @ngdoc function
 * @name pouchtestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pouchtestApp
 */
angular.module('pouchtestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
