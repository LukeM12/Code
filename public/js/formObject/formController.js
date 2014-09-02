app.controller("formController", function($scope, $http, Sub){
		$scope.understand = "cool";

		$scope.sendForm = function(isValid){
			Sub.post($scope.user);
		}
});
