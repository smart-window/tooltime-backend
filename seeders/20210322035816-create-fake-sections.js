'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'sections',
      [
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f01',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          name: 'Generator A',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f02',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          name: 'Generator B',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f03',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          name: 'Painter A',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sections', null, {})
  },
}
