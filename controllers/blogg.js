var bloggModel = require('../data/models/blogg');

// get all bloggs
function getAll(req, res, next) {
	
	bloggModel.find({}, function(err,result){
		if(err){
			return next(err);
		}
		res.send(result);
	});
	
}

// add a blogg
function add(req, res, next){
	bloggModel.create(req.body, function(err, result){
		if(err){
			return next(err);
		}
		res.send({message: "1 blogg added", data: result});
	})
}

// delete a blogg
function del(req, res, next){
	console.log(req.method, req.path, req.params);
	bloggModel.remove({_id:req.params.id}, function(err){
		if(err){
			console.log(err);
			return next(err);
		}
		res.send({message: "1 blogg deleted"});
	})
}

//update blogg
function update(req, res, next){
	bloggModel.update({_id: req.params.id}, req.body, function(err, result){
		if(err){ return next(err); }
		res.send({message: "1 blogg updated", data: result});
	})
}

module.exports = {
	getAll: getAll,
	add: add,
	delete: del,
	update: update
}