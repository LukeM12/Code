app.controller("mainController", function($scope, $http, Main){
	
    $scope.showForm = function(){
            //Require data modelling on angular frontend
            $scope.userForm = true;

    
    
    $scope.works = Main.get();
});
