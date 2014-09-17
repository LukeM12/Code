// server.js

// BASE SETUP
// ==============================================
var express = require('express');
var mongoose = require('mongoose');
var app     = express();
var port    = 	process.env.PORT ||3000;

var database = require('./config/database'); 

var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// ROUTES
// ==============================================

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


mongoose.connect(database.url); 	
// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
	res.send('this is a sample!');	
});
var router = express.Router();
require('./app/routes.js')(router);


// apply the routes to our application
app.use('/', router);
app.use('/#/api/devform', router);
app.use('/#/api/testform', router);
app.use('/#/about', router);
app.use('/#/foobar1', router);




app.use(express.static(__dirname + '/public')); 	

// login routes
app.route('/login')

	// show the form (GET http://localhost:8080/login)
	.get(function(req, res) {
		res.send('this is the login form');
	})

	// process the form (POST http://localhost:8080/login)
	.post(function(req, res) {
		console.log('processing');
		res.send('processing the login form!');
	});

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
