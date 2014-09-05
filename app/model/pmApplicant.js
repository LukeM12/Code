//Initiate the Mongo DB
var mongoose = require('mongoose');

//I guess this requires a bit of explaining. The comm is the verbal communication skills and the written is is the written communication skills

var schema = new mongoose.Schema({ username : 'string', position: 'string', email:'string', comm: 'string', writt:'string', description:'string'}); 

module.exports = mongoose.model('pmApplicant', schema);
