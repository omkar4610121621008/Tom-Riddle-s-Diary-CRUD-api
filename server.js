const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
const entryRouter = require("./routes/entryRouter")
const userLogin = require("./routes/userLogin")
const userRegister = require("./routes/userRegister")
const User = require("./models/user")
app.use(cors())
app.use(express.json())
app.use("/entries", entryRouter)
app.use("/user", userLogin)
app.use("/user", userRegister)

app.get("/", async (req, res) => {
    res.send("Hello")
})

// app.post("/register", async (req, res, next) => {
//     try {
//         const { username, password} = req.body
//         const user = await User.create({ username, password})
//         res.status(200).send({ user })
//     } catch (error) {
//         console.log(error)
//         res.status(404)
//     }
// })

// app.get("/login", async (req, res, next) => {
//     const user = await User.findAll({where: {
//         username: req.body.username,
//         password: req.body.password
//       }})
//     if (user){
//         res.send("Successfully logged in!")
//     } else {
//         res.status(404).send("Incorrect login information!!!")
//     }
// })

app.listen(5000, (req, res) => {
    console.log("Port 5000")
})



module.exports = app