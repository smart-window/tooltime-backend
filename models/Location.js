const uuid = require('uuid')

module.exports = (sequelize, type) => {
  const obj = sequelize.define(
    'Location',
    {
      id: {
        type: type.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV4,
      },
      name: type.STRING,
      description: type.TEXT,
      address_1: type.STRING,
      address_2: type.STRING,
      city: type.STRING,
      state: type.STRING,
      zip: type.STRING,
      phone: type.STRING,
      hours: type.STRING,
      active: type.BOOLEAN,
    },
    {
      hooks: {
        beforeCreate: obj => {
          obj.id = uuid.v4()
        },
      },
    },
  )

  return obj
}
