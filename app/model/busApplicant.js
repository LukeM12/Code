//Initiate the Mongo DB
var mongoose = require('mongoose');
//

var schema = new mongoose.Schema({ username : 'string', email:'string', expertise:'string', major: 'string', description: 'string'}); 

module.exports = mongoose.model('busApplicant', schema);
