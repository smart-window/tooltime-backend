'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          name: 'Generator',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356901',
          name: 'Ladder',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          name: 'Painter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {})
  },
}
