app.controller("markController", function($scope, $http, Mark){
    $scope.sendForm = function(isValid) {
        if (isValid) { 
            $scope.understand = Mark.post($scope.user);
        
        }
    };
});


