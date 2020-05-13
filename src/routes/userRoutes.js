const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../controllers/userController')

let saltRounds = 15
const salt = bcrypt.genSaltSync(saltRounds)

router.post('/', async (req, res) => {
    if(!req.body){
        return res.status(400).sendStatus({ status: 400, success: false, message: "Bad Request", info: null })
    }

    let data = {
        id_user: req.body.id_user,
        full_name: req.body.full_name,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(String(req.body.password), salt),
        profile: req.body.profile
    }
    let user = new User()
    let result = await user.createUser(data)
    return res.status(result.status).send(result)
})

router.post('/login', async (req, res) => {
    let id = req.body.id_user
    let pass = String(req.body.password)
    let user = new User()
    let result = await user.login(id)

    let userExist = await user.userExist(id)
    if(!userExist){
        return res.status(200).send('Usuario o contraseña incorrecta')
    }else{
        let passBD = result.info
        let isValidPass = bcrypt.compareSync(pass, passBD)
        if(isValidPass){
            return res.status(result.status).send(result)
        }else{
            return res.status(result.status).send('Usuario o contraseña incorrecta')
        }
    }
})

router.get('/profile', async (req, res) => {
    let id = req.body.id_user
    let user = new User()
    let result = await user.findUser(id)
    return res.status(result.status).send(result.info)
})

module.exports = router