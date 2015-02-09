'use strict';

/**
 * @ngdoc function
 * @name pouchtestApp.controller:PouchCtrl
 * @description
 * # PouchCtrl
 * Controller of the pouchtestApp
 */


angular.module('pouchtestApp')
  .controller('PouchCtrl', function ($scope, pouchDB) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var db = pouchDB('example');

    $scope.buton = '';
    $scope.docs = {};

    $scope.savePouch = function savePouch() {
      var save = {
        _id: new Date().toISOString(),
        title: $scope.buton,
        completed: false
      };
      db.put(save, function callback(err, result) {
        if (!err) {
          console.log('Successfully posted a todo!');
        }
        console.log(result);
      });
    };

    $scope.getPouch = function getPouch() {
        console.log('Am dat click pe asta');
        db.allDocs({}, function(err, doc) {
          console.log('Am primit raspuns');
          $scope.docs = doc.rows;
          $scope.$apply();
        });
    };

  });
