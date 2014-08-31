app.controller("MainController", function($scope, $http){
		$scope.understand = "I now understand how scope works";
	
       $scope.sendCall = function(){         
            //$scope.understand = "hello world";
            /*$http.get('api/submission').success(function(data) {
            	$scope.
            });*/
            $http.post('/api/submission', $scope.user)
              .success(function(data) {
				$scope.understand = data;
                //var a = angular.copy($scope.user);
                //$scope.understand = a.name;
                //$scope.understand = data;
              });
            /*$http.post('api/submission', user)
              .success(function(data) {
				var a = angular.copy($scope.user);
                $scope.understand = a.name;
                //$scope.understand = data;
              });
              
            //do something with json 
        /*
            $http.get('api/submission')
			  .success(function(data) {
                 //$scope.message = 'this is 1'; 
                 //$scope.understand = data;
  				});
  			$http.get('/api/submission')
			  .success(function(data) {
				 $scope.understand = data;
                 $scope.message = 'this is 2';
  				});*/
        }
});
