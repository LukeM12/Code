
/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("pmController", function($scope, $http, Pm){
    $scope.sendForm = function(isValid) {
        if (isValid) { 
            $scope.understand = Pm.post($scope.user);
        
        }
    };
	//$scope.understand = Dev.post();
});

