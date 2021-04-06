'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ OrderItem, Customer }) {
      this.hasMany(OrderItem, { foreignKey: 'orderId', as: 'orderItems' })
      this.belongsTo(Customer, { foreignKey: 'customerId', as: 'customer' })
    }
  }
  Order.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Order must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Order must have a email' },
          notEmpty: { msg: 'email must not be empty' },
          isEmail: { msg: 'Must be a valid email address' },
        },
      },
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      locationId: {
        type: DataTypes.STRING, // Foreign Key ----> Location
        allowNull: false,
      },
      customerId: {
        type: DataTypes.STRING, // Foreign Key ----> Customer
        allowNull: false,
      },
      pickupDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      notes: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM({
          values: ['PENDING', 'PICKED', 'DELIVERED', 'RETURNED', 'EXPIRED'],
        }),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    },
  )
  return Order
}
