const uuid = require('uuid');

module.exports = (sequelize, type) => {
    const obj = sequelize.define('Part', {
        id: {
            type: type.UUID,
            primaryKey: true,
            defaultValue: sequelize.UUIDV1
        },
        name: type.STRING,
        type: type.STRING,
        make: type.STRING,
        model: type.STRING,
        sn: type.STRING,
        purchaseDate: type.DATEONLY,
        po: type.STRING,
        LocationDetail: type.TEXT,
        status: type.STRING,
        statusDate: type.DATEONLY,
        statusDescription: type.TEXT,
        description: type.TEXT,
        active: type.BOOLEAN,
    }, {
    })

    obj.beforeCreate(obj => obj.id = uuid.v4())
    
    return obj
  }