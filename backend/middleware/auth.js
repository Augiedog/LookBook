const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
    let user = await User.findOne({
        where: { email: req.body.email }
    })
    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({
            message: `This Oma Could not Be found`
        })
    } else {
        res.json({ user })
        console.log("yes, you are loged in")
    }
    console.log(user, "authjs")
})

module.exports = router