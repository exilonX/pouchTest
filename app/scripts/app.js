'use strict';

/**
 * @ngdoc overview
 * @name pouchtestApp
 * @description
 * # pouchtestApp
 *
 * Main module of the application.
 */
angular
  .module('pouchtestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pouchdb'
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
      .when('/pouchTest', {
        templateUrl: 'views/pouch.html',
        controller: 'PouchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
