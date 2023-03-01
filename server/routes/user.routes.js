const ControladorUsuarios = require('../controllers/user.controller')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) =>{
    app.post('/api/registro', ControladorUsuarios.registraUsuario)
    app.post('/api/login', ControladorUsuarios.loginUsuario) 
    app.get('/api/logout', ControladorUsuarios.logOutUser)
    app.get('/api/user/:id', authenticate, ControladorUsuarios.findOneSingleUsuario);
    app.put('/api/user/update/:id', authenticate, ControladorUsuarios.updateExistingUsuario);
}