const express = require('express')
const router = express.Router({ mergeParams: true })
const { StatusCodes } = require('http-status-codes')
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
  const { email, password } = req.body
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
})

module.exports = router
