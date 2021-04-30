const {
  Config,
  Customer,
  Lead,
  Location,
  Offer,
  Asset,
  Product,
  Servicearea,
  Category,
  Section,
  Order,
  OrderItem,
  User,
  UserLocation,
  sequelize,
} = require('../models')

const Models = {
  Config,
  Location,
  Servicearea,
  Offer,
  Customer,
  Lead,
  Asset,
  Product,
  Category,
  Section,
  Order,
  OrderItem,
  User,
  UserLocation,
}
const connection = {}

module.exports = async () => {
  if (connection.isConnected) {
    console.log('=> Using existing connection.')
    return Models
  }

  try {
    await sequelize.authenticate()
    connection.isConnected = true
    console.log('Created a new connection.')
    return Models
  } catch (e) {
    console.log(e.message)
    console.log('!! Unable to connect to database')
  }
}
