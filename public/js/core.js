var app = angular.module('MainForm', []);


/* Configure the dynamic content to go info angularjs */
app.config(function ($routeProvider) {
	$routeProvider.
	when('/form', 
		{
			templateUrl:'views/form.html',
			controller:'formController'
		}
	).
	when('/home', 
		{
			templateUrl:'views/home.html',
			controller:'mainController'
		}
	).
	otherwise({redirectTo: '/home'});
});
/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("mainController", function($scope, $http, Main){
		$scope.understand = "cool";
		$scope.showForm = function(){
			alert('hello world');
			$http.get('/form');
		}
});

/* Configure the service for form application submissions */
//TODO, expand this for all the kinds of posts of forms you will be receiving (marketing, PM etc)
app.factory('Main', function($http){
        return {
            get : function() {
            	return $http.get('/form');
            }
        }
});


