app.controller("markController", function($scope, $http, $location, Mark){
    $scope.sendForm = function(isValid) {
        if (isValid) { 
            $scope.understand = Mark.post($scope.user);
            $location.path('/confirm');
        
        }
    };
});


