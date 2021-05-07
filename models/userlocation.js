'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserLocation.init(
    {
      userId: DataTypes.String,
      locationId: DataTypes.String,
      isDefault: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'UserLocation',
    },
  )
  return UserLocation
}
