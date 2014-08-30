app.controller("MainController", function($scope, $http){
		$scope.understand = "I now understand how scope works";
		
        $scope.sendCall = function(){         
            //$scope.understand = "hello world";
            /*$http.get('api/submission').success(function(data) {
            	$scope.
            });*/

            $http.get('api/submission')
			  .success(function(data) {
				 $scope.understand = data;
  				});
  			$http.get('/api/submission')
			  .success(function(data) {
				 $scope.understand = data;
  				});
        }
});
