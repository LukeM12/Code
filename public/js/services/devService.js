app.factory('Dev', function($http){
        return {
            post : function(applicantData) {	
            	return $http.post('/api/devform', applicantData);
            }      
        }
});

