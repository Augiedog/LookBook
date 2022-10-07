const router = require('express').Router()
const db = require("../models")

const { Picture } = db

router.post('/', async (req, res) => {
    if (!req.body.fileName) {
        req.body.pic = 'FileName'
    }
    if (!req.body.picUrl) {
        req.body.city = 'http://placekitten.com/400/400'
    }
    if (!req.body.description) {
        req.body.state = 'description goes here'
    }
    if (!req.body.authorId) {
        req.body.authorId = "1"
    }
    const picture = await Picture.create(req.body)
    res.json(picture)
})

router.get('/', async (req, res) => {
    const pictures = await Picture.findAll()
    res.json(pictures)
})

module.exports = router