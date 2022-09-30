require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings

// Root
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the LookBook backend'
    })
})

// Listen for Connection
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})