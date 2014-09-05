
var mongoose = require('mongoose');

var schema = new mongoose.Schema({ username : 'string', position: 'string', email:'string', description: 'string', editor:'string', OS:'string'}); 

module.exports = mongoose.model('devApplicant', schema);
