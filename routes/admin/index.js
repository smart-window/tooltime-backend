const express = require('express')
const router = express.Router()
const { requireAdminAuth } = require('../../controllers/auth')

const authRouter = require('./auth')
router.use('/auth', authRouter)

const locationRouter = require('./location')
router.use('/location', requireAdminAuth, locationRouter)

module.exports = router