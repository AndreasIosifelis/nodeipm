var database = require('mongoose'),
	Model = require('../common/Model');

	Person = new database.Schema({
			firstName : String,
			lastName : String,
			username : String,
			password : String
		},
		Model.idTransform
		);

database.model('Person', Person);
