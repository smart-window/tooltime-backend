'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'sections',
      [
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          name: 'Generator A',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          name: 'Generator B',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          name: 'Painter A',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sections', null, {})
  },
}
