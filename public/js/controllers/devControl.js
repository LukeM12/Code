
/* Configure the Angular Controller for the form, and inject the submission service */
app.controller("devController", function($scope, $http, Dev){

	$scope.understand = Dev.get();
});

