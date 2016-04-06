var express = require('express'),
	router = express.Router();

router.get('/', function(req, res, next){
	res.render('doctors');
});

router.get('/add', function(req, res, next){
	res.render('add-doctors');
});

module.exports = router;