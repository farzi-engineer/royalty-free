/*
single-post.js
*/
'use strict';

angular.module('myApp.single-post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/item', {
    templateUrl: 'single-post/single-post.html',
    controller: 'SinglePostCtrl'
  });
}])

.controller('SinglePostCtrl', [function() {

}]);
