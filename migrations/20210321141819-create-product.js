'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('products', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      categoryId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sectionId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.STRING,
      },
      available: DataTypes.INTEGER,
      picking: DataTypes.INTEGER,
      inUse: DataTypes.INTEGER,
      shelving: DataTypes.INTEGER,
      outOfCirc: DataTypes.INTEGER,
      onOrder: DataTypes.INTEGER,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products')
  },
}
