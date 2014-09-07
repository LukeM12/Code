
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
    
    /* 	Configure the DEVELOPER form Page 	*/
    router.get('/api/devform', function(req, res) {      
        res.send('im the devpage!');	
    });

    router.post('/api/devform', function(req, res) {      
        devApplicants.create( req.body, function(err, applicant){
            if (err){
               res.send(err)
            }
	    	console.log(req.body);
            res.send('hello world');
        });
   });
    
    /* 	Configure the TESTER form Page 		*/
    router.get('/api/testform', function(req, res) {      
        res.send('im the test page!');	
    });
    
    router.post('/api/testform', function(req, res) {      
        testApplicants.create( req.body, function(err, applicant){
            if (err){
               res.send(err)
            }
            //FIXME
            res.send('hello world');
        });
    });
    
    /* 	Configure the PROGRAM MANAGER form Page */
    router.get('/api/pmform', function(req, res) {      
        res.send('im the pm get page!');	
    });
    router.post('/api/pmform', function(req, res) {      
        pmApplicants.create( req.body , function(err, applicant){
            if (err){
               res.send(err)
            }
	   		console.log('User Created For PM Role');
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
        
    /* 	Configure the MARKETING BASE	 form Page */
    router.get('/api/markform', function(req, res) {      
        res.send('im the marketing post page! ');	
    });    
    router.post('/api/markform', function(req, res) {      
        markApplicants.create( req.body , function(err, applicant){
            if (err){
               res.send(err)
            }
	   		console.log('User Created For Marketing Role');
        });
    
    });
    
    
    // Up until here everything is the exact same.
    router.get('/foobar1', function(req, res) {
        //Let us try a database operation
           busApplicants.create({ name : 'THIS WORKED BITCH', email: 'luc785@hotmail.com' }, function(err, applicant) {
            	if(err){
            		res.send(err);
            	}

            });
           markApplicants.create({ name : 'marketing', email: 'luc785@hotmail.com' }, function(err, applicant) {
            	if(err){
            		res.send(err);
            	}
            });
            res.send('hello world');
            //Now we want to use the data structures intelligently
    });


    // about page route (http://localhost:8080/about)
    router.get('/about', function(req, res) {
    	alert('check me');
        res.send('im the about page!');	
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
