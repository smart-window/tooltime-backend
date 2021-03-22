const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDatabase = require('../database/index') // initialize connection

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())
app.use(function(req, res, next) {
  try {
    next()
  } catch (e) {
    res.status(500).send(e)
  }
})

const auth = require('./auth')
app.use('/auth', auth)

const configs = require('./config')
app.use('/config', configs)

const locations = require('./location')
app.use('/location', locations)

const serviceareas = require('./servicearea')
app.use('/servicearea', serviceareas)

const customers = require('./customer')
app.use('/customer', customers)

const leads = require('./lead')
app.use('/lead', leads)

const offer = require('./offer')
app.use('/offer', offer)

const asset = require('./asset')
app.use('/asset', asset)

const product = require('./product')
app.use('/product', product)

const stripe = require('./stripe')
app.use('/stripe', stripe)

const category = require('./category')
app.use('/category', category)

const section = require('./section')
app.use('/section', section)

app.get('/something', async (req, res) => {
  await connectToDatabase()
  res.send('Successfully connected to database')
})

module.exports = app
