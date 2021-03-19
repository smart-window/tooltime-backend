const bcrypt = require('bcrypt')
const uuid = require('uuid')

module.exports = (sequelize, type) => {
  const obj = sequelize.define(
    'Customer',
    {
      id: {
        type: type.UUID,
        primaryKey: true,
      },
      name: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      email: {
        type: type.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a email' },
          notEmpty: { msg: 'email must not be empty' },
          isEmail: { msg: 'Must be a valid email address' },
        },
      },
      password: {
        type: type.STRING,
        allowNull: false,
        get() {
          return () => this.getDataValue('password')
        },
      },
      phone: type.STRING,
      address: type.STRING,
      city: type.STRING,
      state: type.STRING,
      idpId: type.STRING,
      stripeId: type.STRING,
      zip: type.STRING,
      notes: type.TEXT,
    },
    {
      instanceMethods: {
        validPassword(password) {
          return bcrypt.compare(password, this.password())
        },
      },
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync(8)
          user.id = uuid.v4()
          user.password = bcrypt.hashSync(user.password(), salt)
        },
      },
    },
  )

  return obj
}
