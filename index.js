const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes/index')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/v1', routes)

const port =  process.env.PORT || 3000

app.listen(port, () => {
  console.log('El servidor está en:')
  console.log('http://localhost:' + port)
})