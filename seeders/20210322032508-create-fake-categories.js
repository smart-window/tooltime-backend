'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'categories',
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
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356903',
          name: 'Grinders',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356904',
          name: 'Nailers & Staplers',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356905',
          name: 'Rotary & Demolition Hammers',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2f2d4937-b5fe-4435-8d7d-97b5bf356906',
          name: 'Routers, Planers, & Joiners',
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
