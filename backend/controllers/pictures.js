const router = require('express').Router()
const db = require("../models")

const { Picture } = db

router.post('/', async (req, res) => {
    try {
        const picture = await Picture.create(req.body)
    res.json(picture)
    } catch (error) {
        console.log("here is the problem", error)
    }
    
})

router.get('/', async (req, res) => {
    const pictures = await Picture.findAll()
    res.json(pictures)
})

module.exports = router