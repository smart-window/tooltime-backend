const uuid = require('uuid')
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Category, Section }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' })
      this.belongsTo(Section, { foreignKey: 'sectionId', as: 'section' })
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
      hooks: {
        beforeCreate: obj => {
          obj.id = uuid.v4()
        },
      },
    },
  )

  return Product
  // instancemethods

  // Called from Part::afterSave()
  // obj.prototype.rollupParts = async function() {
  //   var statusValueMap = {
  //     onOrder: 'On Order',
  //     available: 'Available',
  //     picking: 'Picking',
  //     // {status: "Waiting", description: "Part is waiting for Pickup."},
  //     inUse: 'In Use',
  //     shelving: 'Shelving',
  //     outOfCirc: 'Out of Circulation',
  //   }

  //   const parts = await this.getParts()
  //   this.getParts().then(p => {
  //     const sums = Object.values(statusValueMap).map(val => {
  //       return p.filter(part => {
  //         return (
  //           (part.active && part.status == val) || (!part.active && val == 'Out of Circulation')
  //         )
  //       }).length
  //     })

  //     Object.keys(statusValueMap).forEach((k, i) => {
  //       this[k] = sums[i]
  //     })

  //     this.save()
  //   })
  // }

  // obj.beforeCreate(obj => (obj.id = uuid.v4()))

  //return obj
}
