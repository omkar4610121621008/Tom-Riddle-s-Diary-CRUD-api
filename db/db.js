const { Sequelize, DataTypes } = require("sequelize")
const path = require("path")

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "./Tom's-Diary"),
    logging: false
})

module.exports = { db, DataTypes }