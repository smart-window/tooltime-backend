const nodemailer = require('nodemailer')

const user = process.env.GMAIL_ADDR
const pass = process.env.GMAIL_PASS

const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: user,
    pass: pass,
  },
})

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: 'Please confirm your account',
      html: `<h1>Welcome to TOOLTIME</h1>
          <img style='width:100%' src='https://www.tennantco.com/content/dam/tennant/tennantco/Campaigns/2017/17-na-all-all-stone-care-products/stone-care-banner.jpg'/>
          <h2>Hello ${name}</h2>
          <p>Please confirm your email by clicking on the following link</p>
          <a href=${process.env.CLIENT_APP_URL}/auth/confirm/${confirmationCode}> Click here</a>
          </div>`,
    })
    .catch(err => console.log(err))
}
