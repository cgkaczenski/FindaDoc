var express = require('express'),
	router = express.Router();

router.get('/add', function(req, res, next){
	res.render('add-categories');
});

module.exports = router;