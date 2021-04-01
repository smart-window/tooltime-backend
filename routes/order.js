const _ = require('lodash')
var express = require('express')
var router = express.Router()
const connectToDatabase = require('../database/index') // initialize connection
const { ORDER_STATUS } = require('../constants')

router.get('/:id?', async (req, res) => {
  console.log('[GET] /order =>', req.params)
  try {
    const { Order } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Order.findAll({
        where: {},
        order: [['name', 'ASC']],
        include: 'orderItems',
      })

      res.send(list)
    } else {
      const order = await Order.findByPk(req.params.id)
      if (order) res.send(order)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

router.post('/', async (req, res) => {
  console.log('[POST] /order =>', req.body)
  try {
    const { Order } = await connectToDatabase()
    const newOrderRequest = _.cloneDeep(req.body)
    newOrderRequest.status = ORDER_STATUS.PENDING
    const r = await Order.create(newOrderRequest, { include: 'orderItems' })
    const order = await Order.findByPk(r.id)
    if (order) res.json(order)
    else res.send({ error: 'model not found' })
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

module.exports = router
