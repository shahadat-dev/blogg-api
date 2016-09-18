var router = require('express').Router();
var usersCtrl = require('../../controllers/users');

router.route('/')
	.get(usersCtrl.getAll)
	.post(usersCtrl.add);

router.route('/:id')
	.delete(usersCtrl.delete)
	.put(usersCtrl.update);


module.exports = router;