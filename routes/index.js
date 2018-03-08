const express = require('express');
const router = express.Router();

let User = require('../models/user')

// Home page
router.get('/', (req, res, next) => {
	res.render('index');
});

// Process Register
router.post('/register', (req, res, next) => {
	const first = req.body.first;
	const last = req.body.last;
	const email = req.body.email;
	
	req.checkBody('first', 'Name field is required').notEmpty();
	req.checkBody('last', 'Email field is required').notEmpty();
	req.checkBody('email', 'Email must be a valid email address').isEmail();

	let errors = req.validationErrors();

	if(errors) {
		console.log("Early error");
		res.render('register', {
			errors: errors
		});
	} else {
		const newUser = new User({
			first: first,
			last: last,
			email: email
		});

		User.registerUser(newUser, (err, user) => {
			if(err) throw console.log('There was a problem, sir.');
			req.flash('success_msg', 'You are registered');
			res.redirect('/');
		});
	}
});

// Login form
router.get('/login', (req, res, next) => {
	res.render('login');
});

// Register form
// router.get('/register', (req, res, next) => {
// 	res.render('register');
// });


module.exports = router;