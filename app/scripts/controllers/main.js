'use strict';

/**
 * @ngdoc function
 * @name ulanMApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ulanMApp
 */
angular.module('ulanMApp')
  .controller('MainCtrl', function($scope) {
    $scope.apples = [{
      src: '/images/apples/red.jpg',
      color: 'red',
      description: 'red apple #1'
    }, {
      src: '/images/apples/red-2.jpg',
      color: 'red',
      description: 'red apple #2'
    }, {
      src: '/images/apples/green.jpg',
      color: 'green',
      description: 'green apple #1'
    }, {
      src: '/images/apples/green-2.jpg',
      color: 'green',
      description: 'green apple #2'
    }, {
      src: '/images/apples/green-3.jpg',
      color: 'green',
      description: 'green apple #3'
    }, {
      src: '/images/apples/white.png',
      color: 'white',
      description: 'white apple #1'
    }, {
      src: '/images/apples/white-2.png',
      color: 'white',
      description: 'white apple #2'
    }, {
      src: '/images/apples/white-3.jpg',
      color: 'white',
      description: 'white apple #3'
    }, {
      src: '/images/apples/yellow.jpg',
      color: 'yellow',
      description: 'yellow apple #1'
    }];

    $scope.comparator = function(actual, expected){
        if(expected === 'all') {
            return true;
        } else if (actual === expected){
            return true;
        }
        return false;
    };
  });
