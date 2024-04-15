const express = require('express')
const app = express.Router()

app.post('/session', (req,res) => {
 const { email, password } = req.body
})

app.post('/register', (req,res) => {
 const { email, password, confirPassword } = req.body
 res.status(200).send("Usuario criado")
})

module.exports = app