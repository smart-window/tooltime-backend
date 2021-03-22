const { StatusCodes } = require('http-status-codes')
const express = require('express')
const router = express.Router()
const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
  try {
    const { Category } = await connectToDatabase()

    if (!req.params.id) {
      const list = await Category.findAll({
        where: {},
        order: [['name', 'ASC']],
      })

      res.send(list)
    } else {
      const category = await Category.findByPk(req.params.id)
      if (category) res.send(category)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: e.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { Category } = await connectToDatabase()
    const r = await Category.create(req.body)
    console.log(r.id)
    const category = await Category.findByPk(r.id)
    if (category) res.send(category)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: e.message })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { Category } = await connectToDatabase()
    await Category.update(req.body, {
      where: { id: req.params.id },
    })

    const category = await Category.findByPk(req.params.id)
    if (category) res.send(category)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Category } = await connectToDatabase()
    const category = await Category.findByPk(req.params.id)
    if (category) {
      var destroy_res = await category.destroy()
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

module.exports = router
