const express = require('express')
const router = express.Router({ mergeParams: true })
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connectToDatabase = require('../../database/index')
const nodemailer = require('../../config/nodemailer.config')

/**
 * User login
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

router.post('/register', async (req, res) => {
  console.log('[POST] /admin/auth/register =>', req.body)
  try {
    const { User } = await connectToDatabase()
    // create confirmation code
    const token = jwt.sign({ email: req.body.email }, process.env.AUTH_TOKEN_SECRET)
    req.body.confirmationCode = token
    req.body.status = 'Pending'
    // create new user
    const r = await User.create(req.body)
    const user = await User.findByPk(r.id)
    // send response
    if (user) res.json(user)
    else res.status(StatusCodes.BAD_REQUEST).json({ error: 'model not found' })
    // send email verification
    nodemailer.sendAdminConfirmationEmail(user.name, user.email, user.confirmationCode)
  } catch (e) {
    console.log('[POST] /admin/auth/register.error =>', e.message)
    res.status(StatusCodes.BAD_REQUEST).send(e.message)
  }
})

router.get('/confirm/:confirmationCode', async (req, res, next) => {
  console.log('[GET] /admin/auth/confirm/:confirmationCode')
  try {
    const { User } = await connectToDatabase()
    const user = await User.update(
      { status: 'Active' },
      {
        where: req.params,
      },
    )
    res.json(user)
  } catch (e) {
    console.log('[POST] /auth/confirm/:confirmationCode.error =>', e.message)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message)
  }
})

router.post('/resend_code', async (req, res) => {
  console.log('[POST] /admin/auth/resend_code =>', req.body)
  try {
    const { User } = await connectToDatabase()
    const user = await User.findByPk(req.body.id)
    // resend email verification
    nodemailer.sendAdminConfirmationEmail(user.name, user.email, user.confirmationCode)
    res.json(true)
  } catch (e) {
    console.log('[POST] /admin/auth/resend_code.error =>', e.message)
    res.status(StatusCodes.BAD_REQUEST).send(e.message)
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
