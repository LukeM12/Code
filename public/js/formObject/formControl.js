app.controller("formController", function($scope, $http, Sub){
		
		$scope.sendForm = function(isValid) {

			// check to make sure the form is completely valid
			if (isValid) { 
				alert('our form is amazing');
                $scope.understand = Sub.post($scope.user);
		        $scope.userForm = false;
            }
		};

});
