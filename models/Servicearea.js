'use strict'
const { Model } = require('sequelize')
const uuid = require('uuid')
module.exports = (sequelize, DataTypes) => {
  class Servicearea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Servicearea.init(
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
      zip: { type: DataTypes.INTEGER, allowNull: false },
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      timezone: DataTypes.INTEGER,
      dst: DataTypes.BOOLEAN,
      meta1: DataTypes.STRING,
      meta2: DataTypes.STRING,
      meta3: DataTypes.STRING,
      meta4: DataTypes.STRING,
      meta5: DataTypes.STRING,
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      locationId: DataTypes.UUID,
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
      modelName: 'Servicearea',
      hooks: {
        beforeCreate: obj => {
          obj.id = uuid.v4()
        },
      },
    },
  )
  return Servicearea
}
