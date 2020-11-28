module.exports = (sequelize, type) => {
    const obj = sequelize.define('Config', {
        key: {
            type: type.STRING,
            primaryKey: true,
        },
        value: {
            type: type.TEXT,
            get() {
                const v = this.getDataValue('value');
                return v ? JSON.parse(v) : [];
            },
            set(v) {
                this.setDataValue('value', JSON.stringify(v))
            }
        },
    }, {
    })
    
    return obj
  }