'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('serviceareas', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      zip: { type: Sequelize.INTEGER, allowNull: false },
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      latitude: Sequelize.FLOAT,
      longitude: Sequelize.FLOAT,
      timezone: Sequelize.INTEGER,
      dst: Sequelize.BOOLEAN,
      meta1: Sequelize.STRING,
      meta2: Sequelize.STRING,
      meta3: Sequelize.STRING,
      meta4: Sequelize.STRING,
      meta5: Sequelize.STRING,
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      homeLocationId: Sequelize.UUID,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('serviceareas')
  },
}