'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameTable('userLocations', 'user_locations')
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameTable('user_locations', 'userLocations')
    ]);
  }
};
