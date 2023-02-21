const express = require("express")
const cors = require("cors")
const app = express()
const entryRouter = require("./routes/entryRouter")
app.use(cors())
app.use(express.json())
app.use("/entries", entryRouter)

app.get("/", async (req, res) => {
    res.send("Hello")
})

app.listen(5000, (req, res) => {
    console.log("Port 5000")
})


module.exports = app