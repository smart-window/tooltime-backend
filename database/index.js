const {
  Config,
  Customer,
  Lead,
  Location,
  Offer,
  Part,
  Product,
  Servicearea,
  sequelize,
} = require('../models')

// Relationships
Part.belongsTo(Product, {
  foreignKey: {
    name: 'productId',
  },
  constraints: false,
})
Product.hasMany(Part, {
  foreignKey: {
    name: 'productId',
  },
  constraints: false,
})

Part.belongsTo(Location, {
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
  Part,
  Product,
}
const connection = {}

module.exports = async () => {
  if (connection.isConnected) {
    console.log('=> Using existing connection.')
    return Models
  }

  try {
    await sequelize.sync({ alter: true, force: true })
    await sequelize.authenticate()
    connection.isConnected = true
    console.log('Created a new connection.')
    return Models
  } catch (e) {
    console.log(e.message)
    console.log('!! Unable to connect to database')
  }
}
