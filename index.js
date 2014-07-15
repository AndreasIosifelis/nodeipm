
var express = require('express'),
        mongoose = require('mongoose'),
        fs = require('fs'),
        http = require('http'),
        config = require('./config/config'),
        root = __dirname,
        app = express(),
        server = null,
        modelsPath = root + '/server/models/',
        routesPath= root + '/server/routes/';

//load config
require('./config/db')(config);
require('./config/express')(app, config);

//load Models
fs.readdirSync(modelsPath).forEach(function(file){
    if(file.indexOf('.js') >= 0) {
        require(modelsPath + file);
    }
});

//load Routes
fs.readdirSync(routesPath).forEach(function(file){
    if(file.indexOf('.js') >= 0) {
        require(routesPath + file)(app);
    }
});


//start server
server = http.createServer(app);
server.listen(config.port, config.host);
console.log('App started on port ' + config.port);
