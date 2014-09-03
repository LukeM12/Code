/* Main Controller*/
app.controller("mainController", function($scope, $http, Main){
		$scope.News = $Main.get('/api/submission');//Main.get();



		$scope.showForm = function(){
			//alert('hello world');
			//$http.get('/for');
		}
});

