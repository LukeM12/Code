app.controller("MainController", function($scope, $http, Sub){
		$scope.understand = "I now understand how scope works";
	    
       $scope.sendCall = function(){         
            $scope.understand = Sub.post($scope.user);//'/api/submission', $scope.user)
              //.success(function(data) {
			//	$scope.understand = data;
             // });
        }
});

app.factory('Sub', function($http){
        return {
            post : function(applicantData) {
            	return $http.post('/api/submission', applicantData);
            }
        }
});


            //$scope.understand = "hello world";
            /*$http.get('api/submission').success(function(data) {
            	$scope.
            });
                //var a = angular.copy($scope.user);
                //$scope.understand = a.name;
                //$scope.understand = data;
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

