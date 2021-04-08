const { StatusCodes } = require('http-status-codes')
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

/**
 * @params {...req.body}
 * email: string
 * password: string
 * name: string
 * phone: string
 * address: string
 * city: string
 * state: string
 * zip: string
 * stripeId: string
 * notes: text
 */
router.post('/', async (req, res) => {
  console.log('[POST] /customer =>', req.body)
  try {
    const { Customer } = await connectToDatabase()
    const r = await Customer.create(req.body)
    const customer = await Customer.findByPk(r.id)
    if (customer) res.send(customer)
    else res.send({ error: 'model not found' })
  } catch (e) {
    console.log('error =>', e.message)
    res.status(StatusCodes.BAD_REQUEST).send(e.message)
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
    else {
      res.status(StatusCodes.BAD_REQUEST).json({ error: 'model not found' })
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Customer } = await connectToDatabase()
    const customer = await Customer.findByPk(req.params.id)
    if (customer) {
      var destroy_res = await customer.destroy()
      res.json({ id: destroy_res.id })
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ error: 'model not found' })
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message })
  }
})

module.exports = router
