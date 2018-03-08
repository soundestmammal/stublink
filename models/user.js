const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stublink');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema ({
	first: {
		type: String
	},
	last: {
		type: String
	},
	email: {
		type: String
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.registerUser = function(newUser, callback){
	newUser.save(callback);
}