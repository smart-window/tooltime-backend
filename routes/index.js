const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDatabase = require('../database/index') // initialize connection
const { requireConsumerAuth } = require('../controllers/auth')

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
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
app.use('/config', requireConsumerAuth, configs)

const locations = require('./location')
app.use('/location', requireConsumerAuth, locations)

const serviceareas = require('./servicearea')
app.use('/servicearea', requireConsumerAuth, serviceareas)

const customers = require('./customer')
app.use('/customer', requireConsumerAuth, customers)

const leads = require('./lead')
app.use('/lead', requireConsumerAuth, leads)

const offer = require('./offer')
app.use('/offer', requireConsumerAuth, offer)

const asset = require('./asset')
app.use('/asset', requireConsumerAuth, asset)

const product = require('./product')
app.use('/product', requireConsumerAuth, product)

const stripe = require('./stripe')
app.use('/stripe', stripe)

const category = require('./category')
app.use('/category', requireConsumerAuth, category)

const section = require('./section')
app.use('/section', requireConsumerAuth, section)

const order = require('./order')
app.use('/order', requireConsumerAuth, order)

const orderItem = require('./order-item')
app.use('/order-item', requireConsumerAuth, orderItem)

app.get('/something', async (req, res) => {
  await connectToDatabase()
  res.send('Successfully connected to database')
})

app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);

module.exports = app
