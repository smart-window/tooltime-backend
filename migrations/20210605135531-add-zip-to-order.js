'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('orders', 'zip', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('orders', 'zip'),
    ]);
  },
};
