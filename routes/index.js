var blogg = require('./routers/blogg');
var users = require('./routers/users');

var routes = function(app){
	app.get('/', function(req, res, next) {
		res.send("Welcome to Blogg app.");
	});
	
	app.use('/blogg', blogg);
	app.use('/users', users);
}

module.exports = routes;