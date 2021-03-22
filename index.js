'use strict'
const dotenv = require('dotenv')
dotenv.config()
const port = 3000
const app = require('./routes')

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
