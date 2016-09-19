var blogg = require('./routers/blogg');
var users = require('./routers/users');
var category = require('./routers/category');

var routes = function(app){
	app.get('/', function(req, res, next) {
		res.send("Welcome to Blogg app.");
	});
	
	app.use('/blogg', blogg);
	app.use('/users', users);
	app.use('/category', category);
}

module.exports = routes;