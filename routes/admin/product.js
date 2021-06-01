var express = require('express')
var router = express.Router()
const multer = require('multer');
const { StatusCodes } = require('http-status-codes')

const connectToDatabase = require('../../database/index') // initialize connection

// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, "product-" + Date.now() + "." + file.mimetype.split("/")[1])
  }
})

const upload = multer({ storage: storage })

router.get('/:id?', async (req, res) => {
  console.log('[GET] /admin/product =>', req.body)
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
      else throw new Error('model not found')
    }
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: e.message })
  }
})

router.post('/', async (req, res) => {
  console.log('[POST] /admin/product =>', req.body)
  try {
    const { Product } = await connectToDatabase()
    const r = await Product.create(req.body)
    const product = await Product.findByPk(r.id, { include: ['category', 'section'] })
    if (product) res.json(product)
    else res.send({ error: 'model not found' })
    const newProduct = await Product.create(req.body)
    if (newProduct) {
      res.send(newProduct)
    } else res.send({ error: 'model not found' })
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
  console.log('[PATCH] /admin/product =>', req.body)
  try {
    const { Product } = await connectToDatabase()
    await Product.update(req.body, {
      where: { id: req.params.id },
    })

    const product = await Product.findByPk(req.params.id)
    if (product) res.json(product)
    else throw new Error('model not found')
  } catch (e) {
    console.log(e)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: e.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { Product } = await connectToDatabase()
    const product = await Product.findByPk(req.params.id)
    if (product) {
      var destroy_res = await product.destroy()
      res.send({ id: destroy_res.id })
    } else throw new Error('model not found')
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: e.message })
  }
})

module.exports = router
