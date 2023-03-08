const express = require("express")
const entryRouter = express.Router()
const { Entry } = require("../models/entry")
console.log("post to entryRouter")
console.log(entryRouter)

entryRouter.post("/", async (req, res) => {
    console.log("post/entries")
    try {
        const entry = await Entry.create(req.body)
        res.status(200).send({ entry })
    } catch (error) {
        console.log(error)
        res.status(404)
    }
})

entryRouter.get("/", async (req, res) => {
    const entrys = await Entry.findAll()
    res.status(200).send({ entrys })
})

entryRouter.get("/:id", async (req, res) => {
    const entry = await Entry.findByPk(req.params.id)
    res.status(200).send({ entry })
})

entryRouter.put("/:id", async (req, res) => {
    const entry = await Entry.findByPk(req.params.id)
    await entry.update(req.body);
    res.status(200).send({ entry })
})

entryRouter.delete("/:id", async (req, res) => {
    const entry = await Entry.findByPk(req.params.id)
    await entry.destroy();
    res.status(200).send({ entry })
})

module.exports = entryRouter