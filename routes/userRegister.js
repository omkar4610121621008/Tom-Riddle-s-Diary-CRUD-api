const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require("express")
const userRegister = express.Router()
const { User } = require("../models/user")
const SALT_COUNT = 10;
const { JWT_SECRET } = process.env


userRegister.post("/register", async (req, res, next) => {
    const {username, password} = req.body
    const hashedpw = await bcrypt.hash(password, SALT_COUNT)
    const {id} = await User.create({
        username,
        password: hashedpw
    })
    const token = jwt.sign({id, username}, JWT_SECRET)
    res.send({message: "successful register", token})
})

module.exports = userRegister