
/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("devController", function($scope, $http, Dev){
    $scope.sendForm = function(isValid) {
        if (isValid) { 

            alert('Hello' + $scope.user.username);
            $scope.understand = Dev.post($scope.user);
        
        }
    };
	//$scope.understand = Dev.post();
});
