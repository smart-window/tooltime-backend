const _ = require('lodash')
var express = require('express')
var router = express.Router()
const connectToDatabase = require('../../database/index') // initialize connection
const { ORDER_STATUS } = require('../../constants')
const { StatusCodes } = require('http-status-codes')

router.post('/get_order_count', async (req, res) => {
  console.log('[GET] /order/get_order_count =>', req.params)
  try {
    const { Order, OrderItem, Customer, Location, Product, Asset } = await connectToDatabase()
    // const list = []
    if (req.body.type == "week") {
      const list = await Order.sequelize.query("SELECT date_tbl.selected_date, COUNT(orders.id) AS order_num FROM (SELECT * FROM (SELECT ADDDATE('1970-01-01', t4.i * 10000 + t3.i * 1000 + t2.i * 100 + t1.i * 10 + t0.i) selected_date FROM (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t0, (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t1, (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t2, (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t3, (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t4) v WHERE selected_date BETWEEN(SELECT DATE(NOW() + INTERVAL(1 - DAYOFWEEK(NOW())) DAY)) AND(SELECT DATE(NOW() + INTERVAL(7 - DAYOFWEEK(NOW())) DAY))) AS date_tbl LEFT JOIN orders ON date_tbl.selected_date = DATE(orders.createdAt) GROUP BY date_tbl.selected_date")
      res.send(list)
    } else if (req.body.type == "month") {
      const list = await Order.sequelize.query("SELECT month_tbl.str AS selected_date, COUNT(orders.id) AS order_num FROM (SELECT DATE_FORMAT(m1, '%b') AS str, DATE_FORMAT(m1, '%Y-%m') AS MONTH FROM ( SELECT (CONCAT(YEAR(NOW()), '-01-01') - INTERVAL DAYOFMONTH( CONCAT(YEAR(NOW()), '-01-01') )-1 DAY) +INTERVAL m MONTH AS m1 FROM ( SELECT @rownum:=@rownum+1 AS m FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4) t1, (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4) t2, (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4) t3, (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4) t4, (SELECT @rownum:=-1) t0 ) d1 ) d2 WHERE m1<=CONCAT(YEAR(NOW()), '-12-31') ORDER BY m1) AS month_tbl LEFT JOIN orders ON month_tbl.month = DATE_FORMAT(DATE(createdAt), '%Y-%m') GROUP BY month_tbl.month")
      res.send(list)
    } else if (req.body.type == "year") {
      const list = await Order.sequelize.query("SELECT year_tbl.year AS selected_date, COUNT(orders.id) AS order_num FROM (SELECT YEAR(NOW()) AS YEAR UNION SELECT YEAR(NOW()) - 1 UNION SELECT YEAR(NOW()) - 2 UNION SELECT YEAR(NOW()) - 3 UNION SELECT YEAR(NOW()) - 4 UNION SELECT YEAR(NOW()) - 5 UNION SELECT YEAR(NOW()) - 6 UNION SELECT YEAR(NOW()) - 7 UNION SELECT YEAR(NOW()) - 8 UNION SELECT YEAR(NOW()) - 9) AS year_tbl LEFT JOIN orders ON year_tbl.year = DATE_FORMAT(DATE(createdAt), '%Y') GROUP BY year_tbl.year")
      res.send(list)
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

router.post('/get_delivery_count', async (req, res) => {
  console.log('[GET] /order/get_delivery_count =>', req.params)
  try {
    const { Order, OrderItem, Customer, Location, Product, Asset } = await connectToDatabase()
    // const list = []
    if (req.body.type == "week") {
      const list = await Order.sequelize.query("SELECT date_tbl.selected_date, COUNT(orders.id) AS order_num FROM (SELECT * FROM (SELECT ADDDATE('1970-01-01', t4.i * 10000 + t3.i * 1000 + t2.i * 100 + t1.i * 10 + t0.i) selected_date FROM (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t0, (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t1, (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t2, (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t3, (SELECT 0 i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) t4) v WHERE selected_date BETWEEN(SELECT DATE(NOW() + INTERVAL(1 - DAYOFWEEK(NOW())) DAY)) AND(SELECT DATE(NOW() + INTERVAL(7 - DAYOFWEEK(NOW())) DAY))) AS date_tbl LEFT JOIN orders ON date_tbl.selected_date = DATE(orders.createdAt) AND (orders.status != 'PICKED' AND orders.status != 'PENDING') GROUP BY date_tbl.selected_date")
      res.send(list)
    } else if (req.body.type == "month") {
      const list = await Order.sequelize.query("SELECT month_tbl.str AS selected_date, COUNT(orders.id) AS order_num FROM (SELECT DATE_FORMAT(m1, '%b') AS str, DATE_FORMAT(m1, '%Y-%m') AS MONTH FROM ( SELECT (CONCAT(YEAR(NOW()), '-01-01') - INTERVAL DAYOFMONTH( CONCAT(YEAR(NOW()), '-01-01') )-1 DAY) +INTERVAL m MONTH AS m1 FROM ( SELECT @rownum:=@rownum+1 AS m FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4) t1, (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4) t2, (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4) t3, (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4) t4, (SELECT @rownum:=-1) t0 ) d1 ) d2 WHERE m1<=CONCAT(YEAR(NOW()), '-12-31') ORDER BY m1) AS month_tbl LEFT JOIN orders ON month_tbl.month = DATE_FORMAT(DATE(createdAt), '%Y-%m') AND (orders.status != 'PICKED' AND orders.status != 'PENDING') GROUP BY month_tbl.month")
      res.send(list)
    } else if (req.body.type == "year") {
      const list = await Order.sequelize.query("SELECT year_tbl.year AS selected_date, COUNT(orders.id) AS order_num FROM (SELECT YEAR(NOW()) AS YEAR UNION SELECT YEAR(NOW()) - 1 UNION SELECT YEAR(NOW()) - 2 UNION SELECT YEAR(NOW()) - 3 UNION SELECT YEAR(NOW()) - 4 UNION SELECT YEAR(NOW()) - 5 UNION SELECT YEAR(NOW()) - 6 UNION SELECT YEAR(NOW()) - 7 UNION SELECT YEAR(NOW()) - 8 UNION SELECT YEAR(NOW()) - 9) AS year_tbl LEFT JOIN orders ON year_tbl.year = DATE_FORMAT(DATE(createdAt), '%Y') AND (orders.status != 'PICKED' AND orders.status != 'PENDING') GROUP BY year_tbl.year")
      res.send(list)
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

router.get('/:id?', async (req, res) => {
  console.log('[GET] /order =>', req.params)
  try {
    const { Order, OrderItem, Customer, Location, Product, Asset } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Order.findAll({
        order: [['name', 'ASC']],
        include: [{ model: OrderItem, include: [{ model: Product, include: [{ model: Asset, include: [Location] }] }] }, Customer, Location],
      })
      res.send(list)
    } else {
      const order = await Order.findByPk(
        req.params.id, {
        include: [{ model: OrderItem, include: [{ model: Product, include: [{ model: Asset, include: [Location] }] }] }, Customer, Location],
      })
      // const orderItem = await OrderItem.findByPk(order.params.id, { include: [OrderItem] })
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
    const { Order, OrderItem, Customer } = await connectToDatabase()
    const newOrderRequest = _.cloneDeep(req.body)
    newOrderRequest.status = ORDER_STATUS.PENDING
    const r = await Order.create(newOrderRequest, { include: [OrderItem, Customer] })
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
    if ('orderItems' in req.body) {
      for (orderItem of req.body.orderItems) {
        if (orderItem.id === undefined) await OrderItem.create(orderItem)
        else await OrderItem.update(orderItem, { where: { id: orderItem.id } })
      }
    }
    const order = await Order.findByPk(req.params.id, { include: OrderItem })
    if (order) res.json(order)
    else res.send({ error: 'model not found' })
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

module.exports = router
