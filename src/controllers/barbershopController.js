const db = require('../db')
const msg = require('../handlers/constants')

function Barbershop() { }

Barbershop.prototype = {
    createBarbershop: async (data) => {
        try {
            let res = await db.executeQuery('INSERT INTO barbershops SET ?', data)
            return msg.SUCCESS_RESPONSE(res)
        } catch (error) {
            console.log(error)
            return msg.FAIL_RESPONSE(error)
        }
    },
    allBarbershops: async () => {
        try {
            let res = await db.executeSimpleQuery('SELECT * FROM barbershops')
            if(res.length > 0){
                return msg.SUCCESS_RESPONSE(res)
            }else{
                return msg.NOT_FOUND
            }
        } catch (error) {
            console.log(error)
            return msg.FAIL_RESPONSE(error)
        }
    },
    findBarbershop: async (id) => {
        try {
            let res = await db.executeQuery("SELECT * FROM barbershops WHERE id_barbershop = ?", id)
            return msg.SUCCESS_RESPONSE(res)
        } catch (error) {
            console.log(error)
            return msg.FAIL_RESPONSE(error)
        }
    }
}


module.exports = Barbershop