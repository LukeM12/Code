//Initiate the Mongo DB
var mongoose = require('mongoose');
//

var schema = new mongoose.Schema({ header : 'string', description: 'string'}); 

module.exports = mongoose.model('newsFeed', schema);

