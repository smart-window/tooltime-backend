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

module.exports = router
