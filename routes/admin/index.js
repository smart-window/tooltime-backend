const express = require('express')
const router = express.Router()
const { requireAdminAuth } = require('../../controllers/auth')

const authRouter = require('./auth')
router.use('/auth', authRouter)

const locationRouter = require('./location')
router.use('/location', requireAdminAuth, locationRouter)

const productRouter = require('./product')
router.use('/product', requireAdminAuth, productRouter)

const orderRouter = require('./order')
router.use('/order', requireAdminAuth, orderRouter)

const customerRouter = require('./customer')
router.use('/customer', requireAdminAuth, customerRouter)

const categoryRouter = require('./category')
router.use('/category', requireAdminAuth, categoryRouter)

const sectionRouter = require('./section')
router.use('/section', requireAdminAuth, sectionRouter)

const serviceAreaRouter = require('./serviceArea')
router.use('/service-area', requireAdminAuth, serviceAreaRouter)

const assetRouter = require('./asset')
router.use('/asset', requireAdminAuth, assetRouter)

const stripeRouter = require('./stripe')
router.use('/stripe', stripeRouter)

module.exports = router
