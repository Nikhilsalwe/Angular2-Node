var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
	User.findOne({email: 'yogi@yahoo.com'}, function(err, doc){
		if (err) {
			return res.send('Error!');
		}
		console.log('here', doc);
		res.render('node', {email: doc});
	});
});


router.post('/', function (req, res, next){
	var email = req.body.email;
	var user = new User({
		firstName: 'Nikhil',
		lastName: 'Salwe',
		password: 'yogita',
		email: email
	});

	user.save();
	res.redirect('/');
})

module.exports = router;
