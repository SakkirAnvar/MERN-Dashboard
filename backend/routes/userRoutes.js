const express = require('express')
const user = require('../models/UserModel')
const UserModel = require('../models/UserModel')
const router = express.Router()

router.post('/', async (req,res) => {
    try {
        const {username, address, email, password, image} = req.body
        const user = new UserModel({username, address, email, password, image})
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
})

router.get('/', async (req,res) => {
    try {
        const users = await user.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;