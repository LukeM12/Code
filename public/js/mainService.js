/* Configure the service for form application submissions */
//TODO, expand this for all the kinds of posts of forms you will be receiving (marketing, PM etc)
app.factory('Main', function($http){
        return {
            get : function() {
            	return $http.get('/api/submission');
            }
        }
});

