const router = require('express').Router()
const db = require("../models")

const { Picture } = db

router.post('/', async (req, res) => {
    const picture = await Picture.create(req.body)
    res.json(picture)
})

router.get('/', async (req, res) => {
    const pictures = await Picture.findAll()
    res.json(pictures)
})

module.exports = router