'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('configs', {
      key: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      value: {
        type: Sequelize.TEXT,
        get() {
          const v = this.getDataValue('value')
          return v ? JSON.parse(v) : []
        },
        set(v) {
          this.setDataValue('value', JSON.stringify(v))
        },
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('configs')
  },
}
