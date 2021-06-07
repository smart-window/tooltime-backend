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
          email: 'admin1@gmail.com',
          name: 'Admin 1',
          password: bcrypt.hashSync('admin', bcrypt.genSaltSync(8)),
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          email: 'admin2@gmail.com',
          name: 'Admin 2',
          password: bcrypt.hashSync('admin', bcrypt.genSaltSync(8)),
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          email: 'agent1@gmail.com',
          name: 'Agent 1',
          password: bcrypt.hashSync('agent', bcrypt.genSaltSync(8)),
          role: 'agent',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          email: 'agent2@gmail.com',
          name: 'Agent 2',
          password: bcrypt.hashSync('agent', bcrypt.genSaltSync(8)),
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
