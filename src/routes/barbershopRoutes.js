const express = require('express')
const router = express.Router()
const Barbershop = require('../controllers/barbershopController')
const User = require('../controllers/userController')

router.post('/', async (req, res) => {
    if(!req.body){
        return res.status(400).sendStatus({ status: 400, success: false, message: "Bad Request", info: null })
    }

    let user = new User()
    let userExist = await user.userExist(req.body.id_owner)
    if(!userExist){
        console.log("Usuario no existe")
        return res.status(200).send({
            message: "El usuario no existe en la base de datos"
        })
    }

    let changeProfile = await user.changeProfile(req.body.id_owner, 2)
    if(!changeProfile){
        return res.status(400).send({
            message: 'Oops. Ha ocurrido un error en el proceso, intente más tarde.'
        })
    }

    let data = req.body
    let barbershop = new Barbershop()
    let result = await barbershop.createBarbershop(data)
    return res.status(result.status).send(result)

})

router.get('/', async (req, res) => {
    let barbershop = new Barbershop()
    let result = await barbershop.allBarbershops()
    return res.status(result.status).send(result.info)
})

router.get('/:id_barbershop', async (req, res) => {
    let id = req.params.id_barbershop
    let barbershop = new Barbershop()
    let result = await barbershop.findBarbershop(id)
    return res.status(result.status).send(result)
})

module.exports = router