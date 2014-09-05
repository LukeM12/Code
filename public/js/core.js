var app = angular.module('AppTruth', []);



app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', 
		{
			templateUrl:'views/home.html',
			controller:'mainController'
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

/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("testController", function($scope, $http, Test){
    $scope.sendForm = function(isValid) {
        if (isValid) { 

            Dev.post($scope.user);
        
        }
    };
});


app.factory('Test', function($http){
        return {
            post : function(applicantData) {
            	return $http.post('/foobar1', applicantData);
            }      
        }
});


