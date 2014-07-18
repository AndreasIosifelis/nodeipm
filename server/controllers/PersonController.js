var database = require('mongoose'),
	Person = database.model('Person'),
	Controller = require('../common/Controller'),
	PersonController = {};

exports.findAll = function (req, res) {

	Person.find({}, function (err, records) {
		if (err)
			throw new Error(err);

		res.send({records: records, device: req.device});
	});
};

exports.findOne = function (req, res) {

	Person.findById(req.params.id, function (err, record) {
		if (err)
			throw new Error(err);

		res.send(record);
	});
};

exports.add = function (req, res) {

	if(req.body.password){
		req.body.password = Controller.hash.generate(req.body.password);
	}
	var document = new Person(req.body);

	document.save(function (err, record) {
		if (err)
			throw new Error(err);

		res.send(document);
	});
};

exports.update = function (req, res) {
	Person.findByIdAndUpdate(req.params.id, {
		$set : req.body
	}, function (err, record) {
		if (err)
			throw new Error(err);

		res.send(record);
	});
};

exports.remove = function (req, res) {
	Person.findByIdAndRemove(req.params.id, function (err, record) {
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
	Person.findById(req.params.id, function (err, record) {
		if (err)
			throw new Error(err);

		res.send(record);
	});
};

exports.authorize = function(req, res){
	
};
