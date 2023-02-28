const ControladorUsuarios = require('../controllers/user.controller')

module.exports = (app) =>{
    app.post('/api/registro', ControladorUsuarios.registraUsuario)
    app.post('/api/login', ControladorUsuarios.loginUsuario) 
    app.get('/api/logout', ControladorUsuarios.logOutUser)
    app.get('/api/user/:id', ControladorUsuarios.findOneSingleUsuario);
    app.put('/api/user/update/:id', ControladorUsuarios.updateExistingUsuario);
}