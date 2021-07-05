'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameTable('orderItems', 'order_items')
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameTable('order_items', 'orderItems')
    ]);
  }
};
