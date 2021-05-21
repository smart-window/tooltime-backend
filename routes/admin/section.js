const { StatusCodes } = require('http-status-codes')
const express = require('express')
const router = express.Router()
const connectToDatabase = require('../../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
  try {
    const { Section } = await connectToDatabase()

    if (!req.params.id) {
      const list = await Section.findAll({
        where: {},
        order: [['name', 'ASC']],
        include: 'category',
      })
      res.send(list)
    } else {
      const section = await Section.findByPk(req.params.id, { include: 'category' })
      if (section) res.send(section)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: e.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { Section, Category } = await connectToDatabase()
    const cat = await Category.findOne({
      where: {
        id: req.body.categoryId,
      },
    })
    const newSection = await Section.create(req.body)
    if (newSection) {
      res.send(newSection)
    } else res.send({ error: 'model not found' })
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: e.message })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { Section } = await connectToDatabase()
    await Section.update(req.body, {
      where: { id: req.params.id },
    })

    const section = await Section.findByPk(req.params.id)
    if (section) res.send(section)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Section } = await connectToDatabase()
    const section = await Section.findByPk(req.params.id)
    if (section) {
      var destroy_res = await section.destroy()
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

module.exports = router
