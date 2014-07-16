var database = require('mongoose'),
	User = database.model('User'),
	Controller = require('../common/Controller'),
	UserController = {};

exports.findAll = function (req, res) {

	User.find({}, function (err, records) {
		if (err)
			throw new Error(err);

		res.send(records);
	});
};

exports.findOne = function (req, res) {

	User.findById(req.params.id, function (err, record) {
		if (err)
			throw new Error(err);

		res.send(record);
	});
};

exports.add = function (req, res) {
	var document = new User(req.body);

	document.save(function (err, record) {
		if (err)
			throw new Error(err);

		res.send(document);
	});
};

exports.update = function (req, res) {
	User.findByIdAndUpdate(req.params.id, {
		$set : req.body
	}, function (err, record) {
		if (err)
			throw new Error(err);

		res.send(record);
	});
};

exports.remove = function (req, res) {
	User.findByIdAndRemove(req.params.id, function (err, record) {
		if (err)
			throw new Error(err);

		res.send(record);
	});
};

exports.changePassword = function (req, res) {

	res.send([{
				newPassword: req.body.newPassword,
				newPasswordHashed : Controller.hash.generate(req.body.newPassword),
				oldPassword : req.body.oldPassword
			}
		]);
};

exports.profile = function (req, res) {
	User.findById(req.params.id, function (err, record) {
		if (err)
			throw new Error(err);

		res.send(record);
	});
};
