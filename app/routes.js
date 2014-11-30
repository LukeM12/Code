
testApplicants = require('./model/testApplicant');
devApplicants = require('./model/devApplicant');
pmApplicants = require('./model/pmApplicant');
busApplicants = require('./model/busApplicant');
markApplicants = require('./model/markApplicant');

// get an instance of router
// route middleware that will happen on every request
module.exports = function(router){
    router.use(function(req, res, next) {

        // log each request to the console
        console.log(req.method, req.url);

        // continue doing what we were doing and go to the route
        next();	
    });

	/* The initial conditions for the html page */
    router.get('/', function(req, res) {
	//res.sendfile('./public/views/index.jpeg');	
        res.sendfile('./public/index.html'); 	
    });

	/* 	Configure the NewsFeed	*/
    router.get('/api/newsfeed', function(req, res) {      
        res.send('im the news page!');	
    });
    
    //TODO FIX POST
    router.post('/api/newsfeed', function(req, res) {      
        res.send('im the home page!');	
    });
    /********************************************/
    /*		End News Feed			*/
    /********************************************/
    
    
    
    /********************************************/
    /*		    API/Database Routing	*/
    /********************************************/

    /*  Information and Analytics */
    router.get('/api/info', function(req, res) {      
        res.sendfile('./public/info.html');  
    });

    router.post('/api/busform', function(req, res) {      
        busApplicants.create( req.body , function(err, applicant){
            if (err){
               res.send(err)
            }
            console.log('User Created For Business Role');
        });
    });
        

    /* 	Configure the BUSINESS form Page 	*/
    router.get('/api/busform', function(req, res) {      
        res.send('im the business get page!');	
    });

    router.post('/api/busform', function(req, res) {      
        busApplicants.create( req.body , function(err, applicant){
            if (err){
               res.send(err)
            }
	   		console.log('User Created For Business Role');
        });
    });
        


    // route middleware to validate :name
    router.param('name', function(req, res, next, name) {
        // do validation on name here
        // blah blah validation
        // log something so we know its working
        console.log('doing name validations on ' + name);

        // once validation is done save the new item in the req
        req.name = name;
        // go to the next thing
        next();	
    });

    // route with parameters (http://localhost:8080/hello/:name)
    router.get('/hello/:name', function(req, res) {
        res.send('hello ' + req.name + '!');
    });
}
