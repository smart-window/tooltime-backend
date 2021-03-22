'use strict'
const app = require('./routes')
const serverless = require('serverless-http')
module.exports.handler = serverless(app)
