var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	BaseController = require('./BaseController');

exports.findAll = function (req, res) {
	//req.session.loggedIn = true;
	if(!BaseController.hasPermission(req.session)){ 
		res.send([{
			success: false,
			errors: ["Access Denied"]
		}]);
		return;
	}
	User.find({}, function (err, users) {
		if (err)
			throw new Error(err);
		var json = [{
				success : true,
				totalcount : users.length,
				rows : users
			}
		];
		res.send(json);
	});
};

exports.findOne = function (req, res) {

	User.findById(req.params.id, function (err, user) {
		if (err)
			throw new Error(err);

		res.send(user);
	});
};

exports.add = function (req, res) {
	var document = new User(req.body);

	document.save(function (err, user) {
		if (err)
			throw new Error(err);
		//console.log(req);
		res.send(user);
	});
};

exports.update = function (req, res) {
	User.findByIdAndUpdate(req.params.id, {
		$set : req.body
	}, function (err, user) {
		if (err)
			throw new Error(err);

		res.send(user);
	});
};

exports.remove = function (req, res) {
	User.findByIdAndRemove(req.params.id, function (err, user) {
		if (err)
			throw new Error(err + " DELETE ERROR");

		res.send(user);
	});
};

exports.changePassword = function (req, res) {
	//console.log("Change Password");
	console.log(req);
	res.send([{
				newPassword : req.body.newPassword,
				oldPassword : req.body.oldPassword
			}
		]);
};
