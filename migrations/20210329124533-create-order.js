'use strict'
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('orders', {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      locationId: {
        type: DataTypes.STRING, // Foreign Key ----> Location
        allowNull: false,
      },
      customerId: {
        type: DataTypes.STRING, // Foreign Key ----> Customer
        allowNull: false,
      },
      pickupDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      notes: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM({
          values: ['PENDING', 'PICKED', 'DELIVERED', 'RETURNED', 'EXPIRED'],
        }),
        allowNull: false,
      },
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
    await queryInterface.dropTable('orders')
  },
}
