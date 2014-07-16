var database = require('mongoose');

module.exports = function(app, config){
    database.connect(config.db)
    config.dbConnection = database.connection;
	
	
	config.dbConnection.on('connected', function(){

	});
	
    
    config.dbConnection.on('error', function(){
       throw new Error('Unable to connect to database at ' + config.db + 'this is from db.js'); 
    });
};
