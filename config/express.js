var express = require('express'),	
	MongoStore = require('connect-mongo')(express);
	
module.exports = function(app, config){
    
    app.configure(function(){
        
        app.use(express.compress());
        app.set('port', config.port);
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
		
		app.use(express.cookieParser());
		app.use(express.session({
			store: new MongoStore({
				mongoose_connection: config.dbConnection
			}),
			secret: config.salt
		}));
		
		
		
        app.use('/api', app.router);
        
        app.use('/', express.static(__dirname + '/../desktop'));
        
    });
    
};
