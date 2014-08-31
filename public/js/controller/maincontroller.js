app.controller("MainController", function($scope, $http, Sub){
		$scope.understand = "I now understand how scope works";
	    
       $scope.sendCall = function(){         
            $scope.understand = Sub.post($scope.user);//'/api/submission', $scope.user)
              //.success(function(data) {
			//	$scope.understand = data;
             // });
        }
});
