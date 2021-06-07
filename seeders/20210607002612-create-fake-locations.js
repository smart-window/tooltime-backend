'use strict';
const bcrypt = require('bcrypt')
const uuid = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'locations',
      [
        {
          id: uuid.v4(),
          name: 'New York 1',
          address_1:'27 W 36th St',
          city:'New York',
          state: 'NY',
          zip: '10018',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'New York 2',
          address_1:'255 W 44th St',
          city:'New York',
          state: 'NY',
          zip: '10036',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'Texas 1',
          address_1:'1918 Cadiz St',
          city:'Dallas',
          state: 'TX',
          zip: '75201',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'Texas 2',
          address_1:'608 S Pearl Expy',
          city:'Dallas',
          state: 'TX',
          zip: '75201',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'California 1',
          address_1:'1866 Turk Blvd',
          city:'San Francisco',
          state: 'CA',
          zip: '94115',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('locations', null, {});
  }
};
