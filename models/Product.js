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

    // instancemethods

    // Called from Part::afterSave()
    obj.prototype.rollupParts = async function() {
        var statusValueMap = {
            onOrder: "On Order",
            available: "Available",
            picking: "Picking",
            // {status: "Waiting", description: "Part is waiting for Pickup."},
            inUse: "In Use",
            shelving: "Shelving",
            outOfCirc: "Out of Circulation",
        }
        
        const parts = await this.getParts()
        this.getParts().then(p => {
            const sums = Object.values(statusValueMap).map(val => {
                return p.filter(part => {
                    return (part.active && part.status==val) || (!part.active && val=='Out of Circulation')
                }).length
            })

            Object.keys(statusValueMap).forEach((k, i) => {
                this[k] = sums[i]
            })

            this.save()
        })
    };

    obj.beforeCreate(obj => obj.id = uuid.v4())
    
    return obj
  }