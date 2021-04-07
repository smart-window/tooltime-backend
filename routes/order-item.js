const _ = require('lodash')
var express = require('express')
var router = express.Router()
const connectToDatabase = require('../database/index') // initialize connection

router.delete('/:id', async (req, res) => {
  console.log('[DELETE] /order-item =>', req.body)
  try {
    const { OrderItem } = await connectToDatabase()
    const orderItem = await OrderItem.findByPk(req.params.id)
    if (orderItem) {
      var destroy_res = await orderItem.destroy()
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

module.exports = router
