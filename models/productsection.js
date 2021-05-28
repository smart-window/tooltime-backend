'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ProductSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductSection.init(
    {
      productId: DataTypes.STRING,
      sectionId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ProductSection',
    },
  )
  return ProductSection
}
