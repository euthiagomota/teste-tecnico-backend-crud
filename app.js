require('dotenv').config()

/* imports */
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = require('./routes/user')

const app = express()
const port = 3000


// Config Json response
app.use(express.json())
app.use(router)



// Connection at in MongoDB
mongoose.connect('mongodb+srv://euthiagojose2004:90s4N73xldj4c47V@usuario-dataside.lp0w99q.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(port)
    console.log("Conectou ao banco!")
})
.catch((err => {console.log(err)
}))