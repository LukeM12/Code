app.factory('Bus', function($http){
        return {
            post : function(applicantData) {	
            	return $http.post('/api/busform', applicantData);
            }      
        }
});

