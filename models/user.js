'use strict'
const bcrypt = require('bcrypt')
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Location, UserLocation }) {
      // define association here
      this.belongsToMany(Location, { through: UserLocation })
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return () => this.getDataValue('password')
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('admin', 'agent'),
      },
      status: {
        type: DataTypes.ENUM('Pending', 'Active'),
        defaultValue: 'Pending'
      },
      confirmationCode: {
        type: DataTypes.STRING,
        unique: true
      },
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync(8)
          user.password = bcrypt.hashSync(user.password(), salt)
        },
      },
    },
  )
  return User
}
