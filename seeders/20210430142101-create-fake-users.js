'use strict'
const bcrypt = require('bcrypt')
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: uuid.v4(),
          email: 'admin@tt.com',
          name: 'Admin',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          email: 'agent@tt.com',
          name: 'Agent',
          password: bcrypt.hashSync('a', bcrypt.genSaltSync(8)),
          role: 'agent',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  },
}
