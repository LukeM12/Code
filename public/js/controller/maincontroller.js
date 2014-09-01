app.controller("MainController", function($scope, $http, Sub){
		$scope.understand = "I now understand how scope works";
	    
        	// function to submit the form after all validation has occurred			
		$scope.sendForm = function(isValid) {

			// check to make sure the form is completely valid
			if (isValid) { 
				alert('our form is amazing');
                $scope.understand = Sub.post($scope.user);
			
            }
		};

});
