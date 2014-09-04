var app = angular.module('AppTruth', []);

app.config(function ($routeProvider) {
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
	otherwise({template: 'this does not exist'});
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


