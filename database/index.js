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
  sequelize,
} = require('../models')

// Relationships
Asset.belongsTo(Product, {
  foreignKey: {
    name: 'productId',
  },
  constraints: false,
})
Product.hasMany(Asset, {
  foreignKey: {
    name: 'productId',
  },
  constraints: false,
})

Asset.belongsTo(Location, {
  foreignKey: {
    name: 'locationId',
  },
  constraints: false,
})

Servicearea.hasOne(Location, {
  foreignKey: {
    name: 'homeLocationId',
  },
  constraints: false,
})

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
