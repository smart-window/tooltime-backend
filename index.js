'use strict'
const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
dotenv.config()
const port = 3000
const app = require('./routes')
app.use('/uploads', express.static('uploads'))
app.use(cors()) // Use this after the variable declaration

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
