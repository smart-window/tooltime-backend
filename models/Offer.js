const uuid = require('uuid')

module.exports = (sequelize, type) => {
  const obj = sequelize.define(
    'Offer',
    {
      id: {
        type: type.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV1,
      },
      name: type.STRING,
      description: type.TEXT,
      leadIn: type.STRING,
      valueProps: {
        type: type.TEXT,
        get() {
          const v = this.getDataValue('valueProps')
          return v ? JSON.parse(v) : []
        },
        set(v) {
          this.setDataValue('valueProps', JSON.stringify(v))
        },
      },
      depositAmt: type.FLOAT,
      termsVer: type.STRING,
      amt: type.FLOAT,
      ppy: type.INTEGER,
      autorenew: type.BOOLEAN,
      stripePriceId: type.STRING,
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
