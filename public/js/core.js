var app = angular.module('AppTruth', []);



app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', 
		{
			templateUrl:'views/home.html',
			controller:'mainController'
		}
	).
	when('/about', 
		{
			templateUrl:'views/about.html',
            controller:'aboutController'
		}
	).
	when('/test', 
		{
			templateUrl:'views/test.html',
			controller: 'testController'
		}
	).
	when('/dev', 
		{
			templateUrl:'views/dev.html',
			controller: 'devController'
		}
	).
	when('/pm', 
		{
			templateUrl:'views/pm.html',	
			controller: 'pmController'
		
        }
	).
	when('/bus', 
		{
			templateUrl:'views/bus.html',
            controller:'busController'
		}
	).
	when('/mark', 
		{
			templateUrl:'views/mark.html',
            controller:'markController'
		}
	).
	otherwise({templateUrl: 'views/home.html'});
	$locationProvider.html5Mode(true);
});

/* I kind of like Main being here instead of a separate file */

/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("mainController", function($scope, $http, Main){
	$scope.path = "Carletonmap.png";
	//$scope.Image1 = Main.get();
});


app.factory('Main', function($http){
        return {
            get : function() {
            	return $http.get('/api/Image1');
            }      
        }
});


