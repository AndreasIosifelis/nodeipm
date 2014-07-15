var Controller = {},
	database = require('mongoose'),
	Person = database.model('Person'),
	Utils = require('./Utilities');
	
Controller.Utils = Utils;

Controller.hasPermission = function(session){
	return session.userInfo && session.userInfo.loggedIn;
};

Controller.gridResponse = function(success, rows){
	return {
		success: success,
		totalCount: rows.length,
		rows: rows
	};
};


module.exports = Controller;