const express = require('express')
const router = express.Router()
const { StatusCodes } = require('http-status-codes')
const connectToDatabase = require('../database/index')

const auth = require('./auth')
router.use('/auth', auth)
