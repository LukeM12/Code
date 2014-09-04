// server.js

// BASE SETUP
// ==============================================
var express = require('express');
var mongoose = require('mongoose');
var app     = express();
var port    = 	process.env.PORT || 8089;

var database = require('./config/database'); 

var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// ROUTES
// ==============================================

mongoose.connect(database.url); 	
// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
	res.send('this is a sample!');	
});
var router = express.Router();
require('./app/routes.js')(router);


// apply the routes to our application
app.use('/', router);



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
