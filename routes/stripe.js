var express = require('express')
var router = express.Router()

//const connectToDatabase = require('../database/index')
const stripe = require('stripe')('sk_test_51HJlVmCdzeOlOhpkQAtbfQrurUot8gwT492iF069xMYQZvfoOvdroCGJiBeRUBgY06AKt7WcXYQkkefLzXMadg9x00vNgi8kJx');

router.post('/checkout', async function(req, res) {
    try {
      let body = {
        mode: 'subscription',
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        cancel_url: req.body.cancel_url,
        success_url: req.body.success_url,
        line_items: req.body.line_items,    
      }
  
      if(req.body.hasOwnProperty('client_reference_id')) {
        body.client_reference_id = req.body.client_reference_id
      }
  
      if(req.body.hasOwnProperty('customer')) {
        body.customer = req.body.customer
      } else if(req.body.hasOwnProperty('customer_email')) {
        body.customer_email = req.body.customer_email
      } else {
        throw 'Must include at least one customer identifier'
      }
  
      console.log(JSON.stringify(body))
  
      const session = await stripe.checkout.sessions.create(body);
      res.json({ err: null, success: 'Create stripe checkout session succeed!', session })
    } catch (err) {
      res.json({ err: err })
    }
  });
  
  router.post('/webhooks', async function(req, res) {
    let event = req.body
    try {
      // Handle the event
      switch (event.type) {
        case 'checkout.session.completed':
          console.log(JSON.stringify(event))
          let customerId = event.data.object.customer
          let customerEmail = event.data.object.customer_email
          console.log(customerId)
          console.log(customerEmail)
          // TODO: Store customerId with customerEmail
          break;
        default:
          // Unexpected event type
          throw "Unhandled event type"
      }
  
      res.status(200).end()
    } catch (e) {
      res.status(400).json({err: e}).end()
    }
  });

module.exports = router
