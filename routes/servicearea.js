var express = require('express')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
  try {
    const { Servicearea, Location } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Servicearea.findAll({
        where: {
          active: req.params.active ? req.params.active : true,
        },
        order: [['zip', 'ASC']],
        include: [Location],
      })

      res.send(list)
    } else {
      const servicearea = await Servicearea.findByPk(req.params.id)
      if (servicearea) res.send(servicearea)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

router.post('/', async (req, res) => {
  try {
    const { Servicearea } = await connectToDatabase()
    const r = await Servicearea.create(req.body)
    const servicearea = await Servicearea.findByPk(r.id)
    if (servicearea) res.send(servicearea)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { Servicearea } = await connectToDatabase()
    await Servicearea.update(req.body, {
      where: { id: req.params.id },
    })

    const servicearea = await Servicearea.findByPk(req.params.id)
    if (servicearea) res.send(servicearea)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Servicearea } = await connectToDatabase()
    const servicearea = await Servicearea.findByPk(req.params.id)
    if (servicearea) {
      var destroy_res = await servicearea.destroy()
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

module.exports = router
