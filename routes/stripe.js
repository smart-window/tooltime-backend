var express = require('express')
var router = express.Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { StatusCodes } = require('http-status-codes')

// Fetch the Checkout Session to display the JSON result on the success page
router.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  const subscription = await stripe.subscriptions.retrieve(session.subscription)
  res.send(subscription)
})

router.post('/create-checkout-session', async (req, res) => {
  const domainURL = process.env.CLIENT_APP_URL
  const { priceId, routeName } = req.body

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${domainURL}${routeName}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainURL}${routeName}`,
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

router.post('/cancel-subscription', async (req, res) => {
  try {
    const { subscriptionId } = req.body
    const deletedSubscription = await stripe.subscriptions.del(subscriptionId)
    res.send(deletedSubscription)
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: e.message || 'Cancel subscription error',
    })
  }
})

router.post('/update-subscription', async (req, res) => {
  console.log('[POST] /stripe/update-subscription', req.body)
  try {
    const { subscriptionId, priceId } = req.body
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    const updatedSubscription = stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: false,
      proration_behavior: 'create_prorations',
      items: [
        {
          id: subscription.items.data[0].id,
          price: priceId,
        },
      ],
    })
    res.send(updatedSubscription)
  } catch (e) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: e.message || 'Update subscription error' })
  }
})

router.get('/config', async (req, res) => {
  try {
    const prices = await stripe.prices.list({
      active: true,
      expand: ['data.product'],
    })
    res.send({
      prices: prices,
    })
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: e.message || 'Get price list error',
    })
  }
})

router.post('/customer-portal', async (req, res) => {
  // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
  // Typically this is stored alongside the authenticated user in your database.
  const { sessionId } = req.body
  const checkoutsession = await stripe.checkout.sessions.retrieve(sessionId)

  // This is the url to which the customer will be redirected when they are done
  // managing their billing with the portal.
  const returnUrl = process.env.CLIENT_APP_URL

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
