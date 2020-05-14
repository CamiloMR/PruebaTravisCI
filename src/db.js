const mysql = require('promise-mysql')

const pool = mysql.createPool({
  connectionLimit : 20,
  host: 'bekjjeznjo4bgiv1v7qk-mysql.services.clever-cloud.com',
  user: 'udv9yligwn7pvwyl',
  password: 'HRCv5Nw3VJAIMQA7x4C8',
  database: 'bekjjeznjo4bgiv1v7qk',
  port: '3306'
})

async function executeSimpleQuery(sql) {
  return await pool.query(sql)
}

async function executeQuery(sql, params) {
  return await pool.query(sql, params)
}

module.exports = {executeSimpleQuery, executeQuery}