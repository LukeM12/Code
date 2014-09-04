
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

    // home page route (http://localhost:8080)
    router.get('/', function(req, res) {
        res.sendfile('./public/index.html'); 	
    });

    router.get('/foobar', function(req, res) {      
        res.send('im the home page!');	
    });
    
    
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
