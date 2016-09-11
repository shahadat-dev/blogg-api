var blogg = require('./routers/blogg');

var routes = function(app){
	app.get('/', function(req, res, next) {
		res.send("Welcome to Blogg app.");
	});
	
	app.use('/blogg', blogg)
}

module.exports = routes;