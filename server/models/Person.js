var database = require('mongoose'),

	Model = require('../common/Model'),
	
	Fields = Model.Util.extend(Model.commonFields,{
		firstName : String,
		lastName : String,
		username : String,
		password : String
	}),

	Person = new database.Schema(
			Fields,
			Model.idTransform);

database.model('Person', Person);
