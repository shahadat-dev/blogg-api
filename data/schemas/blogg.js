var mongoose = require('mongoose');

var bloggSchema = new mongoose.Schema({
	name: { type: String, required: true},
	description: { type: String }
});

module.exports = bloggSchema;