'use strict';

const connectToDatabase = require('./database/index') // initialize connection

// simple Error constructor for handling HTTP error codes
function HTTPError (statusCode, message) {
    const error = new Error(message)
    error.statusCode = statusCode
    return error
  }

const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())

const configs = require('./routes/config')
app.use('/config', configs)

const locations = require('./routes/location')
app.use('/location', locations)

const serviceareas = require('./routes/servicearea')
app.use('/servicearea', serviceareas)

const customers = require('./routes/customer')
app.use('/customer', customers)

const leads = require('./routes/lead')
app.use('/lead', leads)

const offer = require('./routes/offer')
app.use('/offer', offer)

const part = require('./routes/part')
app.use('/part', part)

const product = require('./routes/product')
app.use('/product', product)

const stripe = require('./routes/stripe')
app.use('/stripe', stripe)

app.get('/something', async (req, res) => {
    await connectToDatabase()
    res.send('Successfully connected to database')
})

module.exports.handler = serverless(app);