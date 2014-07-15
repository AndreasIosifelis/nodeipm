var database = require('mongoose');

module.exports = function(config){
    database.connect(config.db);
    var db = database.connection;
    
    
    db.on('error', function(){
       throw new Error('Unable to connect to database at ' + config.db + 'this is from db.js'); 
    });
};
