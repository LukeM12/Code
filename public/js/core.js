var app = angular.module('MainForm', []);


//Configure the main page routes
app.config(function ($routeProvider) {
	$routeProvider.when('/', 
		{
			templateUrl:'js/formObject/form.html',
			controller:'formController'
		}
	)
});

app.controller("formController", function($scope, $http){
		$scope.understand = "cool";
});
