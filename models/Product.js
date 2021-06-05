const uuid = require('uuid')
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Category, Section }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'categoryId' })
      this.belongsTo(Section, { foreignKey: 'sectionId' })
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      categoryId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sectionId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.STRING,
      },
      available: DataTypes.INTEGER,
      picking: DataTypes.INTEGER,
      inUse: DataTypes.INTEGER,
      shelving: DataTypes.INTEGER,
      outOfCirc: DataTypes.INTEGER,
      onOrder: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      hooks: {
        beforeCreate: obj => {
          obj.id = uuid.v4()
        },
      },
    },
  )

  return Product
}
