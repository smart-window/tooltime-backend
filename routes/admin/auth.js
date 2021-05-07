const express = require('express')
const router = express.Router({ mergeParams: true })
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connectToDatabase = require('../../database/index')

/**
 * customer login
 * @param
 * email: string
 * password: string
 * @returns jwt
 */
router.post('/login', async (req, res) => {
  console.log('[POST] /admin/auth/login =>', req.body)
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: 'Bad request' })
      return
    }
    const { User } = await connectToDatabase()
    const loggedUser = await User.findOne({ where: { email: email } })
    if (!loggedUser) {
      res.status(StatusCodes.UNAUTHORIZED).send('Incorrect Credentials')
      return
    }
    const isPwdMatch = await bcrypt.compare(password, loggedUser.password())
    if (!isPwdMatch) {
      res.status(StatusCodes.UNAUTHORIZED).send('Incorrect Credentials')
      return
    }
    const payload = {
      email: loggedUser.email,
    }
    const jwtToken = jwt.sign(payload, process.env.AUTH_TOKEN_SECRET, {
      expiresIn: '1d',
    })
    res.send({ accessToken: jwtToken })
    return
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: e.message })
  }
})

router.get('/account', async (req, res) => {
  console.log('[GET] /admin/auth/account')
  try {
    const { User, Location } = await connectToDatabase()
    const { accesstoken: accessToken } = req.headers

    if (accessToken) {
      const { email } = jwt.verify(accessToken, process.env.AUTH_TOKEN_SECRET)
      const user = await User.findOne({ where: { email }, include: Location })
      console.log('logged user => ', user.toJSON())
      if (user) {
        const responseData = {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          address: user.address,
        }
        responseData.accessToken = jwt.sign({ email }, process.env.AUTH_TOKEN_SECRET, {
          expiresIn: '1d',
        })
        return res.send(responseData)
      } else {
        res.status(StatusCodes.UNAUTHORIZED).send('Not authorized')
      }
    } else {
      res.status(StatusCodes.UNAUTHORIZED).send('Not authorized')
    }
  } catch (err) {
    console.log('[GET] /auth/account', err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: err.message,
    })
  }
})

router.get('/logout', async (req, res) => {
  console.log('[GET] /admin/auth/logout')
  res.send({ success: true })
})
module.exports = router
