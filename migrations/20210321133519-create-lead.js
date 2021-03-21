'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('leads', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: Sequelize.STRING,
      notes: Sequelize.TEXT,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      zip: Sequelize.STRING,
      referrer: {
        type: Sequelize.TEXT,
        get() {
          const v = this.getDataValue('referrer')
          return v ? JSON.parse(v) : []
        },
        set(v) {
          this.setDataValue('referrer', JSON.stringify(v))
        },
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('leads')
  },
}
