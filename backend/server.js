require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const serverless = require('serverless-http')
const { Sequelize } = require('sequelize')
const cors = require('cors')
const path = require('path')
const app = express()

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Root
app.use(express.static(path.join(__dirname, 'public', 'build')));

// Controllers
app.use(express.urlencoded({ extended: true }))
app.use('/users', require('./controllers/users'))
app.use('/pictures', require('./controllers/pictures'))
app.use('/authentication', require('./middleware/auth'))

// Listen for Connection
module.exports.handler = serverless(app)

// app.listen(process.env.PORT, () => {
//     console.log(`Listening on ${process.env.PORT}`)
// })