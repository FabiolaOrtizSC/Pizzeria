const Usuario = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY;

module.exports = {

    registraUsuario: async (req, res) =>{
        user = await Usuario.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({errors:{email:{message:"This email has already been registered."}}})
        }else{
            try{
                const nuevoUsuario = await Usuario.create(req.body)
                const userToken = jwt.sign({_id:nuevoUsuario._id}, SECRET)
                res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 500000)})
                .json({successMessage:"Usuario registrado ", user:nuevoUsuario})
            }catch(error){
                res.status(401).json(error)
            }
        }
    },

    loginUsuario: async (req, res)=>{
        Usuario.findOne({email:req.body.email})
        .then((usuario) => {
            if(!usuario){
                return res.status(400).json({error: "Incorrect Email/Password"})
            }
            bcrypt.compare(req.body.password, usuario.password, (error, data) => {
                if(data){
                    const userToken = jwt.sign({_id:usuario._id}, SECRET)
                    res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 500000)})
                    .json({successMessage:"Usuario logeado ", user:usuario})
                }else{
                    return res.status(400).json({error: "Incorrect Email/Password"})
                }
            })
        })
        .catch((e) => {
            res.status(400).json({error: "Incorrect Email/Password", e})
        })
    },

    logOutUser:(req,res)=>{
        res.clearCookie('userToken', {httpOnly:true, expires:new Date(Date.now() + 500000)})
        res.json({success:'Usuario salio'})
    },
    
    findOneSingleUsuario: (req, res) => {
        Usuario.findOne({ _id: req.params.id })
        .then(oneSingleUsuario => res.json({ oneSingleUsuario }))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
    },

    updateExistingUsuario: (req, res) => {
        Usuario.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true , new: true })
        .then(updatedUsuario => res.json({ updatedUsuario }))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
    }

}