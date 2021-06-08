'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          name: 'POWER TOOLS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356901',
          name: 'ACCESSORIES',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          name: 'HAND TOOLS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {})
  },
}
