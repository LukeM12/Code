app.factory('Pm', function($http){
        return {
            post : function(applicantData) {	
            	return $http.post('/api/pmform', applicantData);
            }      
        }
});



