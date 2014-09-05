
/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("testController", function($scope, $http, Test){
    $scope.sendForm = function(isValid) {
        if (isValid) { 
            alert('Hello' + $scope.user.username);
            $scope.understand = Test.post($scope.user);
        
        }
    };
});


