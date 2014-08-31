//Initiate the Mongo DB
var mongoose = require('mongoose');
//

var schema = new mongoose.Schema({ name : 'string', position: 'string'}); 

module.exports = mongoose.model('Applicant', schema);
