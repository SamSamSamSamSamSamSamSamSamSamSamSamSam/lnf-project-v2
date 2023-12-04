const express = require('express')
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const PORT = 9000

app.use(cors())
app.use(express())

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "lostnfound_management_sys",

})

app.post("/signup", (req, res) => {

    const sql = "INSERT INTO users(`full_name`, `username`, `email`, `contact_info`,`password`) VALUES (?)"
    const values = [

        req.body.full_name,
        req.body.username,
        req.body.email,
        req.body.contact_info,
        req.body.password

    ]
    db.query(sql, [values], (err, data) => {

        if(err){

           return res.json("error")

        }

        return res.json(data)

    })

})

app.listen(PORT, ()=>{

    console.log(`Port ${PORT} is active!`)

})


