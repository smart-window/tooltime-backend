const _ = require('lodash')
var express = require('express')
var router = express.Router()
const connectToDatabase = require('../database/index') // initialize connection
const { ORDER_STATUS } = require('../constants')
const { StatusCodes } = require('http-status-codes')
const { query } = require('express')

router.get('/:id?', async (req, res) => {
  console.log('[GET] /order =>', req.params)
  try {
    const { Order, OrderItem, Product } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Order.findAll({
        where: { customerId: req.authUser.id },
        order: [['name', 'ASC']],
        include: [{ model: OrderItem, include: [Product] }],
      })

      res.send(list)
    } else {
      const order = await Order.findByPk(req.params.id, { include: [OrderItem] })
      if (order) res.send(order)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

router.post('/', async (req, res) => {
  console.log('[POST] /order =>', req.body)
  try {
    const { Order, OrderItem } = await connectToDatabase()
    const available = true
    for (orderItem of req.body.orderItems) {
      const query = 'SELECT COUNT(*) AS num, (SELECT name FROM products WHERE products.id = "' + orderItem.productId + '") AS name FROM (SELECT order_items.endDate FROM assets LEFT JOIN order_items ON assets.orderItemId = order_items.id WHERE assets.productId = "' + orderItem.productId + '") AS tmp WHERE ISNULL(tmp.endDate) OR tmp.endDate < "' + orderItem.startDate + '"'
      const result = await Order.sequelize.query(query)
      console.log(result)
      if (result[0][0].num == 0) {
        res.send({ invalidName: result[0][0].name })
        available = false
        return
      }
    }
    if (available) {
      const newOrderRequest = _.cloneDeep(req.body)
      newOrderRequest.status = ORDER_STATUS.PENDING
      const r = await Order.create(newOrderRequest)
      const order = await Order.findByPk(r.id)
      for (orderItem of req.body.orderItems) {
        orderItem.orderId = order.id
        if (orderItem.id === undefined) await OrderItem.create(orderItem)
        else await OrderItem.update(orderItem, { where: { id: orderItem.id } })
      }
      if (order) res.json(order)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
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
    for (orderItem of req.body.OrderItems) {
      if (orderItem.id === undefined) await OrderItem.create(orderItem)
      else await OrderItem.update(orderItem, { where: { id: orderItem.id } })
    }
    const order = await Order.findByPk(req.params.id, { include: [OrderItem] })
    if (order) res.json(order)
    else res.send({ error: 'model not found' })
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

module.exports = router
