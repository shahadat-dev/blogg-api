var router = require('express').Router();
var categoryCtrl = require('../../controllers/category');

router.route('/')
	.get(categoryCtrl.getAll)
	.post(categoryCtrl.add);

router.route('/:id')
	.delete(categoryCtrl.delete)
	.put(categoryCtrl.update);


module.exports = router;