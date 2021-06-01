const uuid = require('uuid')
const { Model } = require('sequelize')

module.exports = (sequelize, type) => {
  class Asset extends Model {
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, { foreignKey: 'productId' })
    }
  }
  Asset.init(
    {
      id: {
        type: type.UUID,
        primaryKey: true,
        defaultValue: type.UUIDV4,
      },
      name: type.STRING,
      type: type.STRING,
      make: type.STRING,
      model: type.STRING,
      sn: type.STRING,
      purchaseDate: type.DATEONLY,
      po: type.STRING,
      locationDetail: type.STRING,
      status: type.STRING,
      statusDate: type.DATEONLY,
      statusDescription: type.TEXT,
      description: type.TEXT,
      active: type.BOOLEAN,
      productId: type.STRING,
      locationId: type.STRING,
      images: type.TEXT,
    },
    {
      sequelize,
      modelName: 'Asset',
      tableName: 'assets',
      hooks: {
        beforeCreate: obj => {
          obj.id = uuid.v4()
        },
      },
    },
  )
  return Asset
}
