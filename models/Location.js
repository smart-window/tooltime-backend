'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, UserLocation }) {
      // define association here
      this.belongsToMany(User, { through: UserLocation })
    }
  }
  Location.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a name' },
        notEmpty: { msg: 'location name must not be empty' },
      },
      description: DataTypes.TEXT,
      address_1: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a address' },
        notEmpty: { msg: 'address must not be empty' },
      },
      address_2: DataTypes.STRING,
      city: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a city' },
        notEmpty: { msg: 'city must not be empty' },
      },
      state: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a state' },
        notEmpty: { msg: 'state must not be empty' },
      },
      zip: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a zip' },
        notEmpty: { msg: 'zip must not be empty' },
      },
      phone: DataTypes.STRING,
      hours: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
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
      modelName: 'Location',
      tableName: 'locations',
      hooks: {},
    },
  )
  return Location
}
