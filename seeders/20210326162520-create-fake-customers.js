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
          address: '824 Sherman Road',
          city: 'Bronx',
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
          address: '821 North Amherst Street',
          city: 'Tonawanda',
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
          address: '8863 Smith Street',
          city: 'Mercedes',
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
          address: '796 Bald Hill Street',
          city: 'Corpus Christi',
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
          address: '882 South Buttonwood Street',
          city: 'Ontario',
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
