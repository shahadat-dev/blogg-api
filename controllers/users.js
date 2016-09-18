var usersModel = require('../data/models/users');

// get all userss
function getAll(req, res, next) {
	
	usersModel.find({}, function(err,result){
		if(err){
			return next(err);
		}
		res.send(result);
	});
	
}

// add a users
function add(req, res, next){
	usersModel.create(req.body, function(err, result){
		if(err){
			return next(err);
		}
		res.send({message: "1 users added", data: result});
	})
}

// delete a users
function del(req, res, next){
	console.log(req.method, req.path, req.params);
	usersModel.remove({_id:req.params.id}, function(err){
		if(err){
			console.log(err);
			return next(err);
		}
		res.send({message: "1 users deleted"});
	})
}

//update users
function update(req, res, next){
	usersModel.update({_id: req.params.id}, req.body, function(err, result){
		if(err){ return next(err); }
		res.send({message: "1 users updated", data: result});
	})
}

module.exports = {
	getAll: getAll,
	add: add,
	delete: del,
	update: update
}