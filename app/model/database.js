//Initiate the Mongo DB
var mongoose = require('mongoose');
//

var schema = new mongoose.Schema({ name : 'string', position: 'string', email:'string', description: 'string', editor:'string', OS:'string'}); 

module.exports = mongoose.model('Applicant', schema);
