app.factory('Mark', function($http){
        return {
            post : function(applicantData) {	
            	return $http.post('/api/markform', applicantData);
            }      
        }
});

