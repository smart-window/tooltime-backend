'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('assets', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: Sequelize.STRING,
      type: Sequelize.STRING,
      make: Sequelize.STRING,
      model: Sequelize.STRING,
      sn: Sequelize.STRING,
      purchaseDate: Sequelize.DATEONLY,
      po: Sequelize.STRING,
      locationDetail: Sequelize.STRING,
      status: Sequelize.STRING,
      statusDate: Sequelize.DATEONLY,
      statusDescription: Sequelize.TEXT,
      description: Sequelize.TEXT,
      active: Sequelize.BOOLEAN,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('assets')
  },
}
