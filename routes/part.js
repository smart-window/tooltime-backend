var express = require('express')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
  try {
    const { Part } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Part.findAll({
        where: {},
        order: [['name', 'ASC']],
      })

      res.send(list)
    } else {
      const part = await Part.findByPk(req.params.id)
      if (part) res.send(part)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    res.send(e)
  }
})

router.post('/', async (req, res) => {
  try {
    const { Part } = await connectToDatabase()
    const r = await Part.create(req.body)
    const part = await Part.findByPk(r.id)
    if (part) res.send(part)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { Part } = await connectToDatabase()
    await Part.update(req.body, {
      where: { id: req.params.id },
    })

    const part = await Part.findByPk(req.params.id)
    if (part) res.send(part)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Part } = await connectToDatabase()
    const part = await Part.findByPk(req.params.id)
    if (part) {
      var destroy_res = await part.destroy()
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

module.exports = router
