var express = require('express')
var router = express.Router()
var cors = require('cors')

//const connectToDatabase = require('../database/index')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// Fetch the Checkout Session to display the JSON result on the success page
router.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  res.send(session)
})

router.post('/create-checkout-session', async (req, res) => {
  const domainURL = process.env.DOMAIN
  const { priceId } = req.body
  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [customer_email] - lets you prefill the email input in the form
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1JASG9IzukQ9tag0wRHz7y38',
          quantity: 1,
        },
      ],
      // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
      success_url: `${domainURL}/billing-plan?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainURL}/billing-plan`,
    })

    return res.redirect(303, session.url)
  } catch (e) {
    res.status(400)
    return res.send({
      error: {
        message: e.message,
      },
    })
  }
})

router.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    basicPrice: process.env.BASIC_PRICE_ID,
    proPrice: process.env.PRO_PRICE_ID,
  })
})

router.post('/customer-portal', async (req, res) => {
  // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
  // Typically this is stored alongside the authenticated user in your database.
  const { sessionId } = req.body
  const checkoutsession = await stripe.checkout.sessions.retrieve(sessionId)

  // This is the url to which the customer will be redirected when they are done
  // managing their billing with the portal.
  const returnUrl = process.env.DOMAIN

  const portalsession = await stripe.billingPortal.sessions.create({
    customer: checkoutsession.customer,
    return_url: returnUrl,
  })

  res.send({
    url: portalsession.url,
  })
})

// Webhook handler for asynchronous events.
router.post('/webhook', async (req, res) => {
  let data
  let eventType
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event
    let signature = req.headers['stripe-signature']

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
      )
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`)
      return res.sendStatus(400)
    }
    // Extract the object from the event.
    data = event.data
    eventType = event.type
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data
    eventType = req.body.type
  }

  if (eventType === 'checkout.session.completed') {
    console.log(`🔔  Payment received!`)
  }

  res.sendStatus(200)
})

module.exports = router
