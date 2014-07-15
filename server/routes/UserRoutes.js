var UserController = require('../controllers/UserController');

module.exports = function(app){
    
    app.get('/users', UserController.findAll);
    
    app.get('/users/:id', UserController.findOne);
    
    app.post('/users', UserController.add);
    
    app.put('/users/:id', UserController.update);
    
    app.delete('/users/:id', UserController.remove);
    
    app.put('/users/:id/cp', UserController.changePassword);
};
