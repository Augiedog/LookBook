require('dotenv').config()
const express = require('express')
// const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const { Sequelize } = require('sequelize')
const cors = require('cors')
const path = require('path')
const app = express()

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// serve static frontend in production mode
// if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, 'public', 'build')));
// app.use(express.static('public/build'));
// const path = require('path');
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'build'));
// })

// Root
// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Welcome to the Oma\'s Tree backend'
//     })
// })

// Controllers
app.use(express.urlencoded({ extended: true }))
app.use('/users', require('./controllers/users'))
app.use('/pictures', require('./controllers/pictures'))
app.use('/authentication', require('./middleware/auth'))

// Listen for Connection
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
// This is for operation on the server
// app.exports.handler = serverless(app)