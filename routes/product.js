var express = require('express')
const { StatusCodes } = require('http-status-codes')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
  try {
    const { Product, Category, Section } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Product.findAll({
        where: {},
        order: [['name', 'ASC']],
        include: [Category, Section],
      })

      res.send(list)
    } else {
      const product = await Product.findByPk(req.params.id, { include: [Category, Section] })
      if (product) res.json(product)
      else res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: 'model not found' })
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: e.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { Product } = await connectToDatabase()
    const r = await Product.create(req.body)
    const product = await Product.findByPk(r.id, { include: ['category', 'section'] })
    if (product) res.json(product)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { Product } = await connectToDatabase()
    await Product.update(req.body, {
      where: { id: req.params.id },
    })

    const product = await Product.findByPk(req.params.id)
    if (product) res.json(product)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Product } = await connectToDatabase()
    const product = await Product.findByPk(req.params.id)
    if (product) {
      var destroy_res = await product.destroy()
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

module.exports = router
