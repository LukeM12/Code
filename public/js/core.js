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
		alert(document.url + '/api/foobar failed!');
        $scope.News = Main.get();
        //document.URL; 
});

/* Configure the service for form application submissions */
//TODO, expand this for all the kinds of posts of forms you will be receiving (marketing, PM etc)
app.factory('Main', function($http){
        return {
            get : function() {
            	return $http.get('/api/foobar');
            }
        }
});


