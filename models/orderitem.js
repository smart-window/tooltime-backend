'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Product }) {
      // define association here
      this.belongsTo(Order, { foreignKey: 'orderId', as: 'order' })
      this.belongsTo(Product, { foreignKey: 'productId', as: 'product' })
    }
  }

  OrderItem.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      orderId: {
        // Foreign Key ----> Order
        type: DataTypes.STRING,
        allowNull: false,
      },
      productId: {
        // Foreign Key ----> Product
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderCount: {
        // Foreign Key ----> Product
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'OrderItem',
    },
  )
  return OrderItem
}
