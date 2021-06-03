'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameTable('serviceareas', 'service_area')
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameTable('service_area', 'serviceareas')
    ]);
  }
};
