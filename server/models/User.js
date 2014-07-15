var database = require('mongoose'),
Model = require('../common/Model');

User = new database.Schema({
		firstName : String,
		lastName : String,
		username : String,
		password : String
	},
		Model.idTransform);

database.model('User', User);
