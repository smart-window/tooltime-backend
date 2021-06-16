'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('orderItems', 'startDate', {
        type: Sequelize.DATEONLY,
        allowNull: true,
      }),
      queryInterface.addColumn('orderItems', 'endDate', {
        type: Sequelize.DATEONLY,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('orderItems', 'startDate'),
      queryInterface.removeColumn('orderItems', 'endDate')
    ]);
  },
};
