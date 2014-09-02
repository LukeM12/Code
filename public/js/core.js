var app = angular.module('MainForm', []);


/* Configure the dynamic content to go info angularjs */
app.config(function ($routeProvider) {
	$routeProvider.when('/', 
		{
			templateUrl:'js/formObject/form.html',
			controller:'formController'
		}
	)
});
/* Configure the Angular Controller for the form, and inject the submission service */
/*app.controller("formController", function($scope, $http, Sub){
		$scope.understand = "cool";

		$scope.sendForm = function(isValid){
			Sub.post($scope.user);
		}
});*/

/* Configure the service for form application submissions */
//TODO, expand this for all the kinds of posts of forms you will be receiving (marketing, PM etc)
/*app.factory('Sub', function($http){
        return {
            post : function(applicantData) {
            	return $http.post('/api/submission', applicantData);
            }
        }
});*/


