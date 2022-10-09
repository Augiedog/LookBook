const router = require('express').Router()
const db = require("../models")

const { Picture } = db

router.post('/', async (req, res) => {
    if (!req.body.fileName) {
        req.body.pic = 'FileName'
    }
    if (!req.body.picUrl) {
        req.body.picUrl = 'http://placekitten.com/400/400'
    }
    if (!req.body.description) {
        req.body.description = 'This the Caption'
    }
    if (!req.body.authorId) {
        req.body.authorId = "1"
    }
    const picture = await Picture.create(req.body)
    res.json(picture)
})

router.get('/', async (req, res) => {
    const pictures = await Picture.findAll()
    console.log("pictures from backend", pictures)
    res.json(pictures)
    
})

module.exports = router