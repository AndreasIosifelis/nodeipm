var Controller = {},
	database = require('mongoose'),
	hash = require('password-hash'),
	Person = database.model('Person'),
	Utils = require('./Utilities');
	
Controller.Utils = Utils;
Controller.hash = hash;

Controller.hasPermission = function(session){
	return session.userInfo && session.userInfo.loggedIn;
};

Controller.rowsResponse = function(success, rows, totalCount){
	return {
		totalCount: totalCount,
		count: rows.length,
		rows: rows
	};
};

Controller.errorResponse = function(errors){
	return {
		success: false,
		errors: errors
	};
};


module.exports = Controller;