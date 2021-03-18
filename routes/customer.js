var express = require('express')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
  try {
    const { Customer } = await connectToDatabase()

    if (!req.params.id) {
      const list = await Customer.findAll({
        where: {},
        order: [['name', 'ASC']],
      })

      res.send(list)
    } else {
      const customer = await Customer.findByPk(req.params.id)
      if (customer) res.send(customer)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    res.send(e)
  }
})

router.post('/', async (req, res) => {
  try {
    const { Customer } = await connectToDatabase()
    const r = await Customer.create(req.body)
    const customer = await Customer.findByPk(r.id)
    if (customer) res.send(customer)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { Customer } = await connectToDatabase()
    await Customer.update(req.body, {
      where: { id: req.params.id },
    })

    const customer = await Customer.findByPk(req.params.id)
    if (customer) res.send(customer)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Customer } = await connectToDatabase()
    const customer = await Customer.findByPk(req.params.id)
    if (customer) {
      var destroy_res = await customer.destroy()
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

module.exports = router
