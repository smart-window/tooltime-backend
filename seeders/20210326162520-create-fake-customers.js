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
          name: 'Default User',
          email: 'admin@admin.com',
          password: bcrypt.hashSync('aaa', bcrypt.genSaltSync(8)),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('customers', null, {});
  }
};
