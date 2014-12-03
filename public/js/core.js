var app = angular.module('AppTruth', []);



app.config(function ($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', 
		{
			templateUrl:'views/home.html',
			controller:'mainController'
		}
	).
	when('/info', 
	{
		templateUrl:'info.html',
		controller:'QueryController'
	}
	).
	otherwise({templateUrl: 'views/home.html'});
	$locationProvider.html5Mode(true);
});

/* I kind of like Main being here instead of a separate file */

/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("mainController", function($scope, $http, Main){
	$scope.logo = "logo.png";
	$scope.carletonmap = "Carletonmap.png";
	$scope.appgroup = "AppGroup.JPG";
	//$scope.Image1 = Main.get();
});


app.factory('Main', function($http){
        return {
            get : function() {
            	return $http.get('/api/Image1');
            }      
        }
});
app.controller('QueryController', ['$scope', function($scope) {
    $scope.info = 'We Provide Functionality to allow Enterprises to configure their own map. End \n\t  Users can use the functionality by parusing the University and checking out what\n\t  is to see on campus.';

    $scope.direction = function() {
         $scope.info = 'This section is reserved for a specific value proposition and willl serve to\n\t  Gather more information about what the end user of this website seemsn\n\t to find interesting.';
    };
    $scope.design = function() {
         $scope.info = 'tHE DESIGN ELEMENT CARES\n\t ';
         $scope.info += 'Gather more information about what the end user of this website seemsn\n\t to find interesting.';
    };
    $scope.discovery = function() {
         $scope.info = 'We need to say what the user can discover and what this entails, but really is just placeholder text and does not in any way shape or form represent a\n\t an important topic';
    };

    $scope.jalapenoSpicy = function() {
        $scope.info = 'jalapeño';
    };
}]);
/* 
app.controller("QueryController", function($scope, $http, Query){
    $scope.send= function(isValid) {
        if (isValid) { 
            //$scope.understand = Bus.post($scope.user);
            $location.path('/info'); 
        
        }
    };
});

app.factory('Query', function($http){
        return {
            get : function() {
              return $http.get('/api/info');

            }      
        }
});
*/