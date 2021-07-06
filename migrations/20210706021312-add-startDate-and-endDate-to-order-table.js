'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('orders', 'startDate', {
        type: Sequelize.DATEONLY,
        allowNull: true,
      }),
      queryInterface.addColumn('orders', 'endDate', {
        type: Sequelize.DATEONLY,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('orders', 'startDate'),
      queryInterface.removeColumn('orders', 'endDate')
    ]);
  },
};
