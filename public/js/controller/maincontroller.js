
app.config(function($routeProvider){
    $routeProvider.when('/', 
        {
            templateUrl:"js/controller/form.html",
            controller:"MainController"
        }
    )
});

app.controller("MainController", function($scope, $http){// Sub){
			//if (isValid) { 
			//	alert('our form is amazing');
              //  $scope.understand = Sub.post($scope.user);
		//	
         //   }
		//};

});
