var categoryModel = require('../data/models/category');

// get all categories
function getAll(req, res, next) {
	
	/*categoryModel.find({}, function(err,result){
		if(err){
			return next(err);
		}
		res.send(result);
	});*/

	console.log(req.query, req.params);
	var id = "57de7559cbfc88f9295fbf37";

	categoryModel.findOne({name: 'root'}, function(err, rooot) {
    categoryModel.rebuildTree(rooot, rooot.lft, function() {
        categoryModel.findOne({_id: id},function (err, creed) {
          if(err){
						return next(err);
					}
					creed.selfAndDescendants(function(err, cats){
						console.log(cats);
          	res.send(cats);
					})
          
      }); 
    });
  });
	
}

// add a category
function add(req, res, next){
	/*categoryModel.create(req.body, function(err, result){
		if(err){
			return next(err);
		}
		res.send({message: "1 category added", data: result});
	})*/

	categoryModel.findOne({name: 'root'}, function(err, rooot) {
    categoryModel.rebuildTree(rooot, rooot.lft, function() {
    	var id = "57de7559cbfc88f9295fbf37";
      categoryModel.findOne({_id: id}, function(err, creed) {
				var newCat = new categoryModel({
            name: req.body.name,
            parentId: creed._id
        });
        newCat.save(function(err, n) {
        	console.log(err);
          res.send("1 category added.");
        });
      });
    });
  });

}

// delete a category
function del(req, res, next){
	/*categoryModel.remove({_id:req.params.id}, function(err){
		if(err){
			console.log(err);
			return next(err);
		}
		res.send({message: "1 category deleted"});
	})*/

	categoryModel.findOne({name: 'root'}, function(err, root) {
    categoryModel.rebuildTree(root, root.lft, function() {
      categoryModel.findOne({_id: req.params.id }, function(err, creed) {
        creed.remove(function() {
            res.send("1 category deleted.");
        });
      });
    });
	});
}

//update category
function update(req, res, next){
	/*categoryModel.update({_id: req.params.id}, req.body, function(err, result){
		if(err){ return next(err); }
		res.send({message: "1 category updated", data: result});
	});*/

	categoryModel.findOne({name: 'root'}, function(err, root) {
    categoryModel.rebuildTree(root, root.lft, function() {
      categoryModel.findOne({_id: req.params.id }, function(err, creed) {
        categoryModel.update({_id: req.params.id}, req.body, function(err, numAffected){
					if(err){ return next(err); }
					res.send({message: "1 category updated", data: numAffected});
				});
      });
    });
	});
}

module.exports = {
	getAll: getAll,
	add: add,
	delete: del,
	update: update
}