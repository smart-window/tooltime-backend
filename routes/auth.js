const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const connectToDatabase = require('../database/index')

/**
 * customer login
 * @param
 * email: string
 * password: string
 * @returns jwt
 */
router.post('/login', async (req, res) => {
  console.log('[POST] /auth/login =>', req.body)
  const { email, password } = req.body
  const { Customer } = await connectToDatabase()

  const loggedUser = await Customer.findOne({ where: { email: email } })

  if (!loggedUser) {
    res.status(StatusCodes.UNAUTHORIZED).send('Incorrect Credentials')
  }

  const isPwdMatch = await bcrypt.compare(password, loggedUser.password())
  if (!isPwdMatch) res.status(StatusCodes.UNAUTHORIZED).send('Incorrect Credentials')

  const payload = {
    email: loggedUser.email,
  }

  console.log('process.env.AUTH_TOKEN_LIFE =>', process.env.AUTH_TOKEN_LIFE)
  const jwtToken = jwt.sign(payload, process.env.AUTH_TOKEN_SECRET, {
    expiresIn: process.env.AUTH_TOKEN_LIFE,
  })

  res.send({ accessToken: jwtToken })
})

/**
 * @params {...req.body}
 * email: string
 * password: string
 * name: string
 * phone: string
 * address: string
 * city: string
 * state: string
 * zip: string
 * stripeId: string
 * notes: text
 */
router.post('/register', async (req, res) => {
  console.log('[POST] /auth/register =>', req.body)
  try {
    const { Customer } = await connectToDatabase()
    const r = await Customer.create(req.body)
    const customer = await Customer.findByPk(r.id)
    if (customer) res.send(customer)
    else res.send({ error: 'model not found' })
  } catch (e) {
    console.log('error =>', e.message)
    res.status(StatusCodes.BAD_REQUEST).send(e.message)
  }
})

/**
 * check authorized user
 * @returns auth user
 */
router.get('/account', async (req, res) => {
  console.log('[GET] /auth/account')
  try {
    const { Customer } = await connectToDatabase()
    const { accesstoken: accessToken } = req.headers

    console.log('[GET] /auth/account.AccessToken', accessToken)
    if (accessToken) {
      const { email } = jwt.verify(accessToken, process.env.AUTH_TOKEN_SECRET)
      const user = await Customer.findOne({ where: { email } })
      const userData = Object.assign({}, user)
      console.log('user => ', user)
      console.log('userData => ', userData)
      if (user) {
        userData.accessToken = jwt.sign({ email }, process.env.AUTH_TOKEN_SECRET, {
          expiresIn: process.env.AUTH_TOKEN_LIFE,
        })
        return res.send(userData)
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
  console.log('[GET] /auth/logout')
  res.send({ success: true })
})

module.exports = router
