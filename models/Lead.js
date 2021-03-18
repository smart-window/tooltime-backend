const uuid = require('uuid')

module.exports = (sequelize, type) => {
  const obj = sequelize.define(
    'Lead',
    {
      id: {
        type: type.UUID,
        primaryKey: true,
      },
      name: type.STRING,
      notes: type.TEXT,
      email: type.STRING,
      phone: type.STRING,
      zip: type.STRING,
      referrer: {
        type: type.TEXT,
        get() {
          const v = this.getDataValue('referrer')
          return v ? JSON.parse(v) : []
        },
        set(v) {
          this.setDataValue('referrer', JSON.stringify(v))
        },
      },
    },
    {},
  )

  obj.beforeCreate(obj => (obj.id = uuid.v4()))

  return obj
}
