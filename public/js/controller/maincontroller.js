app.controller("MainController", function($scope, $http, Sub){
		$scope.understand = "I now understand how scope works";
	    
       $scope.sendCall = function(isValid){         
            if (isValid) {
                $scope.understand = 'NOT RIGHT';
            }//$scope.understand = Sub.post($scope.user); 
            else {
             	$scope.understand = 'is right';    
             }
        }
        
        	// function to submit the form after all validation has occurred			
		$scope.submitForm = function(isValid) {

			// check to make sure the form is completely valid
			if (isValid) { 
				alert('our form is amazing');
			}
		};

});
