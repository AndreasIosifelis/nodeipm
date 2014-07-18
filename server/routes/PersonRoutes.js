var theController = require('../controllers/PersonController'),
	route = "persons";

module.exports = function(app){

    app.get('/' + route, theController.findAll);
    
    app.get('/' + route + '/:id', theController.findOne);
	
	app.get('/' + route + '/:id/auth', theController.authorize);
    
    app.post('/' + route, theController.add);
    
    app.put('/' + route + '/:id', theController.update);
    
    app.delete('/' + route + '/:id', theController.remove);
    
    app.put('/' + route + '/:id/cp', theController.changePassword);		

};
