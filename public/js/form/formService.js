//Luke Morrison

/* Configure the service for form application submissions */
//TODO, expand this for all the kinds of posts of forms you will be receiving (marketing, PM etc)
app.factory('Sub', function($http){
        return {
            post : function(applicantData) {
            	return $http.post('/api/submission', applicantData);
            }
        }
});
