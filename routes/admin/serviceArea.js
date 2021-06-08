var express = require('express')
var router = express.Router()
const { StatusCodes } = require('http-status-codes')
const connectToDatabase = require('../../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
  console.log('[GET] /admin/service-area =>', req.body)
  try {
    const { Servicearea, Location } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Servicearea.findAll({
        order: [['zip', 'ASC']],
        include: [Location]
      })

      res.send(list)
    } else {
      const servicearea = await Servicearea.findByPk(req.params.id)
      if (servicearea) res.send(servicearea)
      else res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: 'model not found' })
    }
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: e.message })
  }
})

router.post('/', async (req, res) => {
  console.log('[POST] /admin/service-area =>', req.body)
  try {
    const { Servicearea } = await connectToDatabase()
    const r = await Servicearea.create(req.body)
    const servicearea = await Servicearea.findByPk(r.id)
    if (servicearea) res.send(servicearea)
    else throw new Error('Not found')
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: e.message })
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
    else throw new Error('model not found')
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: e.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Servicearea } = await connectToDatabase()
    const servicearea = await Servicearea.findByPk(req.params.id)
    if (servicearea) {
      var destroy_res = await servicearea.destroy()
      res.send({ id: destroy_res.id })
    } else throw new Error('model not found')
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: e.message })
  }
})

module.exports = router
