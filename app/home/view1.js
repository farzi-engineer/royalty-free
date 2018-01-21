'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope',HomeCtrl]);

function HomeCtrl($scope){
	$scope.sections = [
		{title: "Featured",
		images: [
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require littl markup to use effectively."},
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},

			]
		},
		{title: "Fresh Arrival",
		images: [
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			]
		},
		{title: "Most Downloaded",
		images: [
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			{url:"images/sample-1.jpg",desc:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."},
			
			]
		}
	]
}