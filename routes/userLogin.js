const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require("express")
const userLogin = express.Router()
const { User } = require("../models/user")
const SALT_COUNT = 10;
require("dotenv")
const { JWT_SECRET } = process.env

userLogin.post("/login", async (req, res, next) => {
    const {username, password} = req.body
    const {id, name, password: pw} = await User.findOne({where: {username}})
        try {
            const match = await bcrypt.compare(password, pw)
            if(match){
                const token = jwt.sign({username: name, id}, JWT_SECRET)
                res.send({message: "successful login!", token})
            } else {
                res.status(401).send("Incorrect login information")
            }
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    
})

module.exports = userLogin