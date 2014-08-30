var Applicants = require('./model/database');
Applicants.create({ name: 'Jim Dorothy' }, { position: 'snickers' }, function (err,name , position) {
  if (err) throw err
});

/* This is where we want to do stuff with the database */
module.exports = function(app) {	
	app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); 
            	
    });

    app.post('api/submission', function(req, res){
            Applicants.create({a : req.body.text}, function(err, res){
                    if (err)
                        throw err;
                    res.send('Your Data Has Been Sent! Thank you!');
            })
    });

}
