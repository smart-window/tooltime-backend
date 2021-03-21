const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const connectToDatabase = require('../database/index')

const requireAuth = async (req, res, next) => {
  try {
    const { Customer } = connectToDatabase()
    const { AccessToken } = req.headers
    if (AccessToken) {
      const { email } = jwt.verify(AccessToken, process.env.AUTH_TOKEN_SECRET)
      const user = await Customer.findOne({ where: { email } })
      if (user) {
        req.authUser = user
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
