const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
    res.status(401).send('Incorrect Credentials')
  }

  const isPwdMatch = await bcrypt.compare(password, loggedUser.password())
  if (!isPwdMatch) res.status(401).send('Incorrect Credentials')

  const payload = {
    email: loggedUser.email,
  }
  console.log('process.env.AUTH_TOKEN_SECRET', process.env.AUTH_TOKEN_SECRET)
  const jwtToken = jwt.sign(payload, process.env.AUTH_TOKEN_SECRET, {
    expiresIn: process.env.AUTH_TOKEN_LIFE,
  })

  res.send(jwtToken)
})

module.exports = router
