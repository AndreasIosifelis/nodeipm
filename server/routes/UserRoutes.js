var theController = require('../controllers/UserController'),
	route = "users";

module.exports = function(app){

    app.get('/' + route, theController.findAll);
    
    app.get('/' + route + '/:id', theController.findOne);
    
    app.post('/' + route, theController.add);
    
    app.put('/' + route + '/:id', theController.update);
    
    app.delete('/' + route + '/:id', theController.remove);
    
    app.put('/' + route + '/cp/:id', theController.changePassword);
};
