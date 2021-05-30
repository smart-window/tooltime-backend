'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    static associate({ Category, Product, ProductSection }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' })
      this.belongsToMany(Product, { through: ProductSection })
    }
  }
  Section.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Section',
      tableName: 'sections'
    },
  )
  return Section
}
