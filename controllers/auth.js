const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const connectToDatabase = require('../database/index')
const logger = require('logger').createLogger()

// Consumer Authentication Middleware
const requireConsumerAuth = async (req, res, next) => {
  try {
    const { Customer } = await connectToDatabase()
    const { accesstoken: accessToken } = req.headers
    if (accessToken) {
      const { email } = jwt.verify(accessToken, process.env.AUTH_TOKEN_SECRET)
      const user = await Customer.findOne({ where: { email } })
      if (user) {
        req.authUser = user.dataValues
        next()
      } else {
        res.status(StatusCodes.UNAUTHORIZED).send('Not authorized')
      }
    } else {
      res.status(StatusCodes.UNAUTHORIZED).send('Not authorized')
    }
  } catch (err) {
    console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || 'Authentication failed',
    })
  }
}

// Admin/Agent Authentication Middleware
const requireAdminAuth = async (req, res, next) => {
  try {
    const { accesstoken: accessToken } = req.headers
    const { User, Location } = await connectToDatabase()
    if (accessToken) {
      const { email } = jwt.verify(accessToken, process.env.AUTH_TOKEN_SECRET)
      const user = await User.findOne({ where: { email }, include: Location })
      console.log(user.toJSON())
      if (user) {
        req.authUser = user.toJSON()
        next()
      } else {
        res.status(StatusCodes.UNAUTHORIZED).send('Not authorized')
      }
    } else {
      res.status(StatusCodes.UNAUTHORIZED).send('Not authorized')
    }
  } catch (err) {
    console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || 'Authentication failed',
    })
  }
}

module.exports = { requireConsumerAuth, requireAdminAuth }
