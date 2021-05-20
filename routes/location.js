var express = require('express')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
  try {
    const { Location } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Location.findAll({
        order: [['name', 'ASC']],
      })

      res.send(list)
    } else {
      const location = await Location.findByPk(req.params.id)
      if (location) res.send(location)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

module.exports = router
