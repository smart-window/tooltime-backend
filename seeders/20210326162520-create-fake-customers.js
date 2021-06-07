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
          name: 'User 1',
          email: 'user1@gmail.com',
          password: bcrypt.hashSync('user', bcrypt.genSaltSync(8)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'User 2',
          email: 'user2@gmail.com',
          password: bcrypt.hashSync('user', bcrypt.genSaltSync(8)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'User 3',
          email: 'user3@gmail.com',
          password: bcrypt.hashSync('user', bcrypt.genSaltSync(8)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'User 4',
          email: 'user4@gmail.com',
          password: bcrypt.hashSync('user', bcrypt.genSaltSync(8)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'User 5',
          email: 'user5@gmail.com',
          password: bcrypt.hashSync('user', bcrypt.genSaltSync(8)),
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
