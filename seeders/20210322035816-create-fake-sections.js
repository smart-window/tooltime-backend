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
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f04',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356903',
          name: 'Bench Grinders',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f05',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356903',
          name: 'Die & Straight Grinders',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f06',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356903',
          name: 'Large Angle Grinders',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f07',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356904',
          name: 'Finish & Brad Nailers',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f08',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356904',
          name: 'Flooring Tools',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f09',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356904',
          name: 'Framing & Roofing Nailers',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f10',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356905',
          name: 'Chipping & Demolition Hammers',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f11',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356905',
          name: 'Concrete Vibrators',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f12',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356905',
          name: 'Rotary Hammers',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f13',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356906',
          name: 'Biscuits',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f14',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356906',
          name: 'Planers & Joiners',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '035b7535-52a7-4699-a7cb-3c604c890f15',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356906',
          name: 'Routers',
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
