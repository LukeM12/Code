app.controller("busController", function($scope, $http, Bus){
    $scope.sendForm = function(isValid) {
        if (isValid) { 
            $scope.understand = Bus.post($scope.user);
        
        }
    };
});

