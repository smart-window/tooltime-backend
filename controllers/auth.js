const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const connectToDatabase = require('../database/index')

const requireAuth = async (req, res, next) => {
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
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err.message,
    })
  }
}

module.exports = { requireAuth }
