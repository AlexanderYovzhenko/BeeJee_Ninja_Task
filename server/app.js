const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const routesLogin = require('./src/login/login')
const routesTasks = require('./src/routes')

app.use(cors())

app.use(bodyParser.json())

app.use('', routesLogin)
app.use('', routesTasks)

module.exports = app
