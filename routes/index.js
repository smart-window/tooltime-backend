const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDatabase = require('../database/index') // initialize connection
const { requireAuth } = require('../controllers/auth')

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

const adminRoutes = require('./admin')
app.use('/admin', adminRoutes)

const auth = require('./auth')
app.use('/auth', auth)

const configs = require('./config')
app.use('/config', requireAuth, configs)

const locations = require('./location')
app.use('/location', requireAuth, locations)

const serviceareas = require('./servicearea')
app.use('/servicearea', requireAuth, serviceareas)

const customers = require('./customer')
app.use('/customer', requireAuth, customers)

const leads = require('./lead')
app.use('/lead', requireAuth, leads)

const offer = require('./offer')
app.use('/offer', requireAuth, offer)

const asset = require('./asset')
app.use('/asset', requireAuth, asset)

const product = require('./product')
app.use('/product', requireAuth, product)

const stripe = require('./stripe')
app.use('/stripe', requireAuth, stripe)

const category = require('./category')
app.use('/category', requireAuth, category)

const section = require('./section')
app.use('/section', requireAuth, section)

const order = require('./order')
app.use('/order', requireAuth, order)

const orderItem = require('./order-item')
app.use('/order-item', requireAuth, orderItem)

app.get('/something', async (req, res) => {
  await connectToDatabase()
  res.send('Successfully connected to database')
})

module.exports = app
