'use strict'
const dotenv = require('dotenv')
const express = require('express')
dotenv.config()
const port = 3000
const app = require('./routes')
app.use('/uploads', express.static('uploads'))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
