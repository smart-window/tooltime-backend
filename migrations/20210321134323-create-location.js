'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locations', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      address_1: Sequelize.STRING,
      address_2: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      zip: Sequelize.STRING,
      phone: Sequelize.STRING,
      hours: Sequelize.STRING,
      active: Sequelize.BOOLEAN,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('locations')
  },
}
