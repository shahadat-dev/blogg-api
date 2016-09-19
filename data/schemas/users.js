var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
	username: { type: String, required: true},
	password: { type: String, required: true}
});

module.exports = usersSchema;