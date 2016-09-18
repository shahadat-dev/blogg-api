var mongoose = require('mongoose');
var usersSchema = require('../schemas/users');

var users = mongoose.model('users', usersSchema);

module.exports = users;