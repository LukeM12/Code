app.factory('Test', function($http){
        return {
            post : function(applicantData) {	
            	return $http.post('/api/testform', applicantData);
            }      
        }
});


