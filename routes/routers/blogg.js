var router = require('express').Router();
var bloggCtrl = require('../../controllers/blogg');

router.route('/')
	.get(bloggCtrl.getAll)
	.post(bloggCtrl.add);

router.route('/:id')
	.delete(bloggCtrl.delete)
	.put(bloggCtrl.update);


module.exports = router;