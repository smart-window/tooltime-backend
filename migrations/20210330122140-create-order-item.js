'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderItems', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      orderId: {
        // Foreign Key ----> Order
        type: Sequelize.STRING,
        allowNull: false,
      },
      productId: {
        // Foreign Key ----> Product
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderCount: {
        // Foreign Key ----> Product
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orderItems')
  },
}
