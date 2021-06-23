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
          zip: '11385',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'William',
          email: 'william@tt.com',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          zip: '11221',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'James',
          email: 'james@tt.com',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          zip: '78572',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'Lucas',
          email: 'lucas@tt.com',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          zip: '78520',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'Liam',
          email: 'liam@tt.com',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
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
