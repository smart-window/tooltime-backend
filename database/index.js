const Sequelize = require('sequelize')
const LocationModel = require('../models/Location')
const ServiceareaModel = require('../models/Servicearea')
const OfferModel = require('../models/Offer')
const CustomerModel = require('../models/Customer')
const LeadModel = require('../models/Lead')
const PartModel = require('../models/Part')
const ProductModel = require('../models/Product')
const ConfigModel = require('../models/Config')

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)
const Config = ConfigModel(sequelize, Sequelize)
const Location = LocationModel(sequelize, Sequelize)
const Servicearea = ServiceareaModel(sequelize, Sequelize)
const Offer = OfferModel(sequelize, Sequelize)
const Customer = CustomerModel(sequelize, Sequelize)
const Lead = LeadModel(sequelize, Sequelize)
const Part = PartModel(sequelize, Sequelize)
const Product = ProductModel(sequelize, Sequelize)

// Relationships
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
const Models = { Config, Location, Servicearea, Offer, Customer, Lead, Part, Product }
const connection = {}

module.exports = async () => {
  if (connection.isConnected) {
    console.log('=> Using existing connection.')
    return Models
  }

  try {
    await sequelize.sync()
    await sequelize.authenticate()
    connection.isConnected = true
    console.log('=> Created a new connection.')
    return Models
  } catch(e) {
    throw e
  }
}