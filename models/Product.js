const uuid = require('uuid');

module.exports = (sequelize, type) => {
    const obj = sequelize.define('Product', {
        id: {
            type: type.UUID,
            primaryKey: true,
            defaultValue: sequelize.UUIDV1
        },
        name: type.STRING,
        description: type.TEXT,
        category: type.STRING,
        section: type.STRING,
        available: type.INTEGER,
        picking: type.INTEGER,
        inUse: type.INTEGER,
        shelving: type.INTEGER,
        outOfCirc: type.INTEGER,
        onOrder: type.INTEGER,
    }, {
    })

    obj.beforeCreate(obj => obj.id = uuid.v4())
    
    return obj
  }