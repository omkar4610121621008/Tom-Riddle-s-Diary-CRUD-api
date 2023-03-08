const { Entry, User } = require("../models")
const { db } = require("./db");
const SALT_COUNT = 10;
const bcrypt = require("bcrypt")

async function seed (){

    await db.sync({ force: true })

    await Entry.bulkCreate([
        {
            date: "22/11/1943",
            description: "I have discovered secrets of Salazaar Slytherin, and I am hoping to find more when I go deeper into the tunnels."
        },
        {
            date: "15/01/1944",
            description: "This school is tiresome. I know I am far more powerful than even the teachers here, but pitiful Dumbledore says I need to learn the full extent of what hogwarts has to offer."
        },
        {
            date: "02/03/1944",
            description: "I have successfully blamed Hagrid's pet for the death of the student, but little do they know..."
        }
    ])

    const hashedpw = await bcrypt.hash("321", SALT_COUNT)
    const hashedpw2 = await bcrypt.hash("123", SALT_COUNT)

    await User.bulkCreate([
        {
            username: "123",
            password: hashedpw
        },
        {
            username: "1321",
            password: hashedpw2
        },

    ])
}

seed()