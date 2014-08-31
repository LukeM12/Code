//Initiate the Mongo DB
var mongoose = require('mongoose');
//

var schema = new mongoose.Schema({ name : 'string', position: 'string', email:'string', description: 'string', editor:'string'}); 

module.exports = mongoose.model('Applicant', schema);
