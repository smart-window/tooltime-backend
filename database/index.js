const {
  Config,
  Customer,
  Lead,
  Location,
  Offer,
  Asset,
  Product,
  Servicearea,
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

/*
Servicearea.hasMany(Location, {
  constraints: false
})


Customer.belongsTo(Location)

Part.belongsTo(Location)
Part.belongsTo(Product)
Location.hasMany(Customer, {
  constraints: false,
})
Location.hasMany(Part, {
  constraints: false
})

Product.hasMany(Part, {
  constraints: false
})
*/

const Models = {
  Config,
  Location,
  Servicearea,
  Offer,
  Customer,
  Lead,
  Asset,
  Product,
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
