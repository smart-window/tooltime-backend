'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('locations', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a name' },
        notEmpty: { msg: 'location name must not be empty' },
      },
      description: DataTypes.TEXT,
      address_1: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a address' },
        notEmpty: { msg: 'address must not be empty' },
      },
      address_2: DataTypes.STRING,
      city: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a city' },
        notEmpty: { msg: 'city must not be empty' },
      },
      state: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a state' },
        notEmpty: { msg: 'state must not be empty' },
      },
      zip: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notNull: { msg: 'location should have a zip' },
        notEmpty: { msg: 'zip must not be empty' },
      },
      phone: DataTypes.STRING,
      hours: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
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
    await queryInterface.dropTable('locations')
  },
}
