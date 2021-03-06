const bcrypt = require('bcrypt')
const uuid = require('uuid')
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate({ Customer, Servicearea }) {
      this.belongsTo(Servicearea, { foreignKey: 'zip', sourceKey: 'zip', targetKey: 'zip' })
    }
  }
  Customer.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a email' },
          notEmpty: { msg: 'email must not be empty' },
          isEmail: { msg: 'Must be a valid email address' },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return () => this.getDataValue('password')
        },
      },
      status: {
        type: DataTypes.ENUM('Pending', 'Active'),
        defaultValue: 'Pending'
      },
      confirmationCode: {
        type: DataTypes.STRING,
        unique: true
      },
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      idpId: DataTypes.STRING,
      stripeId: DataTypes.STRING,
      zip: DataTypes.STRING, // ----> Foregin key. ServiceArea
      notes: DataTypes.TEXT,
      priceId: DataTypes.STRING,
      subscriptionId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Customer',
      tableName: 'customers',
      instanceMethods: {
        validPassword(password) {
          return bcrypt.compare(password, this.password())
        },
      },
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync(8)
          user.id = uuid.v4()
          user.password = bcrypt.hashSync(user.password(), salt)
        },
      },
    },
  )
  return Customer
}
