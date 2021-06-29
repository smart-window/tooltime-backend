'use strict';
const bcrypt = require('bcrypt')
const uuid = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'customers',
      [
        {
          id: uuid.v4(),
          name: 'Oliver',
          email: 'oliver@tt.com',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          address: '523 D 52th St',
          city: 'New York',
          state: 'NY',
          zip: '11385',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'William',
          email: 'william@tt.com',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          address: '255 W 44th St',
          city: 'New York',
          state: 'NY',
          zip: '11221',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'James',
          email: 'james@tt.com',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          address: '1918 Cadiz St',
          city: 'Dallas',
          state: 'TX',
          zip: '78572',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'Lucas',
          email: 'lucas@tt.com',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          address: '2204 Austin S',
          city: 'Houston',
          state: 'TX',
          zip: '78520',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'Liam',
          email: 'liam@tt.com',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          address: '1866 Turk Blvd',
          city: 'San Francisco',
          state: 'CA',
          zip: '90022',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers', null, {});
  }
};
