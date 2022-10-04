require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { Sequelize } = require('sequelize')
const cors = require('cors')
const app = express()

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())


// Root
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the LookBook backend'
    })
})

// Controllers
app.use('/users', require('./controllers/users'))
app.use('/pictures', require('./controllers/pictures'))

// Listen for Connection
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})