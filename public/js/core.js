var app = angular.module('AppTruth', []);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', 
		{
			templateUrl:'views/home.html',
			controller:'mainController'
		}
	).
		when('/pizza', 
		{
			template:'hello world'
		}
	).
	otherwise({templateUrl: 'views/home.html'});
	$locationProvider.html5Mode(true);
});

/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("mainController", function($scope, $http, Main){


});


app.factory('Main', function($http){
        return {
            get : function() {
            	return 'hello world'
            }
        }
});


