var express = require('express')
var router = express.Router()
const multer = require('multer');
const connectToDatabase = require('../../database/index') // initialize connection

// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, "asset-" + Date.now() + "." + file.mimetype.split("/")[1])
  }
})

const upload = multer({ storage: storage })

router.get('/:id?', async (req, res) => {
  console.log('[GET] /admin/asset =>', req.body)
  try {
    const { Asset } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Asset.findAll({
        where: {},
        order: [['name', 'ASC']],
      })

      res.send(list)
    } else {
      const asset = await Asset.findByPk(req.params.id)
      if (asset) res.send(asset)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    res.send(e)
  }
})

router.post('/', async (req, res) => {
  console.log('[POST] /admin/asset =>', req.body)
  try {
    const { Asset } = await connectToDatabase()
    const r = await Asset.create(req.body)
    const asset = await Asset.findByPk(r.id)
    if (asset) res.json(asset)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.post('/upload', upload.single('image'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }

  const fullPath = req.protocol + "://" + req.headers.host + '/' + req.file.path
  res.send({ fullPath })
})

router.patch('/:id', async (req, res) => {
  console.log('[PATCH] /admin/asset =>', req.body)
  try {
    const { Asset } = await connectToDatabase()
    await Asset.update(req.body, {
      where: { id: req.params.id },
    })

    const asset = await Asset.findByPk(req.params.id)
    if (asset) res.send(asset)
    else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

router.delete('/:id', async (req, res) => {
  console.log('[DELETE] /admin/asset =>', req.body)
  try {
    const { Asset } = await connectToDatabase()
    const asset = await Asset.findByPk(req.params.id)
    if (asset) {
      var destroy_res = await asset.destroy()
      res.send({ id: destroy_res.id })
    } else res.send({ error: 'model not found' })
  } catch (e) {
    res.send(e)
  }
})

module.exports = router
