app.controller("busController", function($scope, $http, $location, Bus){
    $scope.sendForm = function(isValid) {
        if (isValid) { 
            $scope.understand = Bus.post($scope.user);
            $location.path('/confirm'); 
        
        }
    };
});

