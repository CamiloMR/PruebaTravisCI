const express = require('express')
const userRoutes = require('./userRoutes')
const barbershopRoutes = require('./barbershopRoutes')
const router = express.Router()

router.use('/user', userRoutes)
router.use('/barbershop', barbershopRoutes)

module.exports = router