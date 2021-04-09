const _ = require('lodash')
var express = require('express')
var router = express.Router()
const connectToDatabase = require('../database/index') // initialize connection
const { ORDER_STATUS } = require('../constants')
const { StatusCodes } = require('http-status-codes')

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
      const order = await Order.findByPk(req.params.id, { include: 'orderItems' })
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
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

router.delete('/:id', async (req, res) => {
  console.log('[DELETE] /order =>', req.body)
  try {
    const { Order, OrderItem } = await connectToDatabase()
    const order = await Order.findByPk(req.params.id)
    if (order) {
      var destroy_res = await order.destroy()
      await OrderItem.destroy({ where: { orderId: req.params.id } })
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

router.patch('/:id', async (req, res) => {
  console.log('[PATCH] /order =>', req.body)
  try {
    const { Order, OrderItem } = await connectToDatabase()
    await Order.update(req.body, {
      where: { id: req.params.id },
    })
    for (orderItem of req.body.orderItems) {
      if (orderItem.id === undefined) await OrderItem.create(orderItem)
      else await OrderItem.update(orderItem, { where: { id: orderItem.id } })
    }
    const order = await Order.findByPk(req.params.id, { include: 'orderItems' })
    if (order) res.json(order)
    else res.send({ error: 'model not found' })
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

module.exports = router
