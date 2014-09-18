
/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("devController", function($scope, $http, $location, Dev){
    $scope.sendForm = function(isValid) {
        if (isValid) { 

            $scope.understand = Dev.post($scope.user);
            $location.path('/confirm'); 
        }
    };
	//$scope.understand = Dev.post();
});

