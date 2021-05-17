var express = require('express')
const { StatusCodes } = require('http-status-codes')
var router = express.Router()

const connectToDatabase = require('../../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
  console.log('[GET] /admin/location =>', req.body)
  try {
    const { Location } = await connectToDatabase()
    if (!req.params.id) {
      let list
      if (req.authUser.role === 'admin') {
        list = await Location.findAll({ order: [['name', 'ASC']] })
      } else if (req.authUser.role === 'agent') {
        return req.authUser.locations
      }
      res.send(list)
    } else {
      const location = await Location.findByPk(req.params.id)
      if (location) res.send(location)
      else res.status(StatusCodes.BAD_REQUEST).json({ message: 'Item does not exist' })
    }
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: e.message })
  }
})

router.post('/', async (req, res) => {
  console.log('[POST] /admin/location =>', req.body)
  try {
    const { Location } = await connectToDatabase()
    const r = await Location.create(req.body)
    const location = await Location.findByPk(r.id)
    if (location) res.json(location)
    else res.send({ error: 'model not found' })
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: e.message })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { Location } = await connectToDatabase()
    await Location.update(req.body, {
      where: { id: req.params.id },
    })

    const location = await Location.findByPk(req.params.id)
    if (location) res.send(location)
    else res.send({ error: 'model not found' })
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: e.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Location } = await connectToDatabase()
    const location = await Location.findByPk(req.params.id)
    if (location) {
      var destroy_res = await location.destroy()
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: e.message })
  }
})

module.exports = router
