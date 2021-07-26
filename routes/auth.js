const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const connectToDatabase = require('../database/index')
const nodemailer = require('../config/nodemailer.config')

/**
 * customer login
 * @param
 * email: string
 * password: string
 * @returns jwt
 */
router.post('/login', async (req, res) => {
  console.log('[POST] /auth/login =>', req.body)
  try {
    const { email, password } = req.body
    const { Customer } = await connectToDatabase()
    const loggedUser = await Customer.findOne({ where: { email: email } })

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
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message || 'Internal Error')
  }
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
    const token = jwt.sign({ email: req.body.email }, process.env.AUTH_TOKEN_SECRET)
    req.body.confirmationCode = token
    req.body.status = 'Pending'

    const r = await Customer.create(req.body)
    const customer = await Customer.findByPk(r.id)

    if (customer) res.json(customer)
    else res.status(StatusCodes.BAD_REQUEST).json({ error: 'model not found' })

    nodemailer.sendConfirmationEmail(customer.name, customer.email, customer.confirmationCode)
  } catch (e) {
    console.log('[POST] /auth/register.error =>', e.message)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message)
  }
})

router.post('/resend_code', async (req, res) => {
  console.log('[POST] /auth/resend_code =>', req.body)
  try {
    const { Customer } = await connectToDatabase()
    const customer = await Customer.findByPk(req.body.id)

    nodemailer.sendConfirmationEmail(customer.name, customer.email, customer.confirmationCode)
    res.json(true)
  } catch (e) {
    console.log('[POST] /auth/resend_code.error =>', e.message)
    res.status(StatusCodes.BAD_REQUEST).send(e.message)
  }
})

router.get('/servicearea', async (req, res) => {
  try {
    const { Servicearea, Location } = await connectToDatabase()
    if (!req.params.id) {
      const list = await Servicearea.findAll({
        where: {
          active: req.params.active ? req.params.active : true,
        },
        order: [['zip', 'ASC']],
        include: [Location],
      })

      res.send(list)
    } else {
      const servicearea = await Servicearea.findByPk(req.params.id)
      if (servicearea) res.send(servicearea)
      else res.send({ error: 'model not found' })
    }
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

router.get('/confirm/:confirmationCode', async (req, res, next) => {
  console.log('[GET] /auth/confirm/:confirmationCode')
  try {
    const { Customer } = await connectToDatabase()
    const customer = await Customer.update(
      { status: 'Active' },
      {
        where: req.params,
      },
    )
    res.json(customer)
  } catch (e) {
    console.log('[POST] /auth/confirm/:confirmationCode.error =>', e.message)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message)
  }
})

/**
 * check authorized user
 * @returns auth user
 */
router.get('/account', async (req, res) => {
  console.log('[GET] /auth/account')
  try {
    const { Customer, Servicearea, Location } = await connectToDatabase()
    const { accesstoken: accessToken } = req.headers

    if (accessToken) {
      const { email } = jwt.verify(accessToken, process.env.AUTH_TOKEN_SECRET)
      const user = await Customer.findOne({
        where: { email },
        include: [{ model: Servicearea, include: [Location] }],
      })
      if (user) {
        const responseData = {
          id: user.id,
          email: user.email,
          name: user.name,
          role: 'customer',
          address: user.address,
          city: user.city,
          state: user.state,
          zip: user.zip,
          phone: user.phone,
          stripeId: user.stripeId,
          Servicearea: user.Servicearea,
          priceId: user.priceId,
          status: user.status,
          subscriptionId: user.subscriptionId,
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
  console.log('[GET] /auth/logout')
  res.send({ success: true })
})

module.exports = router
