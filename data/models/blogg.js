var mongoose = require('mongoose');
var bloggSchema = require('../schemas/blogg');

var blogg = mongoose.model('blogg', bloggSchema);

module.exports = blogg;