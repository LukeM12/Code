//ROUTES.JS

var Applicants = require('./model/database');
//Applicants.create({ name: 'Jim Dorothy' }, { position: 'snickers' }, function (err,name , position) {
  //if (err) throw err
//});

/* This is where we want to do stuff with the database */
module.exports = function(app) {	
	app.get('/', function(req, res) {
			res.sendfile('./public/index.html'); 
            	
    });

    app.get('/api/submission', function(req, res){
            //mongoose case
            console.log('hello world');
            //res.send('this guy');
            
            //Use mongoose to create a document in our model
            Applicants.create({ a : 'this' }, function(err, applicant) {
            	if(err){
            		res.send(err);
            	}
            	//use mongoose to get a list of all applicantsi
                //By the way, that syntax is correct,
                //However you can put criteria before the callback
                //To specify the document/s in the callback 
                //function as the second parameter. 
            	Applicants.find(function(err, applicant){
            		if(err){
            			res.send(err);
            		}
            		res.json(applicant);
            		//res.json(applicants);
            	});
            });
                            
    });

    app.post('/api/submission', function(req, res){
        Applicants.create( req.body, function(err, applicant){
            if (err){
               res.send(err)
            }
	    console.log(req.body);
            res.send('hello world');
        });
    });
        //This is where we configure the data to be in mongoose
}
            /*Applicants.create({ a : 'this' }, function(err, applicant) {
            	if(err){
            		res.send(err);
            	}
            	
            	
            	Applicants.find(function(err, applicant){
            		if(err){
            			res.send(err);
            		}
            		res.send('hello world');
            		//res.json(applicants);
            		console.log("This is happening " + port);
                
            	});
            });*/
            	 /*function(err, res){
                    if (err)
                        throw err;
                    var data = Applicants.find({name:'Jim Dorothy'}, 
                    function(err, docs){
                        if (err){
                            res.send('error');
                        }
                        res.json(data);
                    })
            });
    });
}*/
//End Model Exports
