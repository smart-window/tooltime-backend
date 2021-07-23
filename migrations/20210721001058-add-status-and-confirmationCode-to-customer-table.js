'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('customers', 'status', {
        type: Sequelize.ENUM('Pending', 'Active'),
        defaultValue: 'Pending',
        allowNull: true,
      }),
      queryInterface.addColumn('customers', 'confirmationCode', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('customers', 'status'),
      queryInterface.removeColumn('customers', 'confirmationCode'),
    ]);
  },
};
