const uuid = require('uuid');

module.exports = (sequelize, type) => {
    const obj = sequelize.define('Servicearea', {
      id: {
        type: type.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV1
      },
      zip: {type: type.INTEGER, allowNull: false,},
      city: type.STRING,
      state: type.STRING,
      latitude: type.FLOAT,
        longitude: type.FLOAT,
        timezone: type.INTEGER,
        dst: type.BOOLEAN,
        meta1: type.STRING,
        meta2: type.STRING,
        meta3: type.STRING,
        meta4: type.STRING,
        meta5: type.STRING,
        active: {
            type: type.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        homeLocationId: type.UUID
    }, {
    })

    obj.beforeCreate(obj => obj.id = uuid.v4())

    return obj
  }