'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      category: Sequelize.STRING,
      section: Sequelize.STRING,
      available: Sequelize.INTEGER,
      picking: Sequelize.INTEGER,
      inUse: Sequelize.INTEGER,
      shelving: Sequelize.INTEGER,
      outOfCirc: Sequelize.INTEGER,
      onOrder: Sequelize.INTEGER,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products')
  },
}
