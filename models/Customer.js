const uuid = require('uuid');

module.exports = (sequelize, type) => {
    const obj = sequelize.define('Customer', {
        id: {
            type: type.UUID,
            primaryKey: true,
            defaultValue: sequelize.UUIDV1
        },
        name: type.STRING,
        notes: type.TEXT,
        email: type.STRING,
        phone: type.STRING,
        address: type.STRING,
        city: type.STRING,
        state: type.STRING,
        idpId: type.STRING,
        stripeId: type.STRING,
        zip: type.STRING,
    }, {
    })

    obj.beforeCreate(obj => obj.id = uuid.v4())
    
    return obj
  }