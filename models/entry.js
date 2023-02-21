const { db, DataTypes } = require("../db/db")

const Entry = db.define("Entry", {
    date: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = { Entry }