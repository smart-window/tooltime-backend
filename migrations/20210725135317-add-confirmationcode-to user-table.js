'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'status', {
        type: Sequelize.ENUM('Pending', 'Active'),
        defaultValue: 'Pending',
        allowNull: true,
      }),
      queryInterface.addColumn('users', 'confirmationCode', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'status'),
      queryInterface.removeColumn('users', 'confirmationCode'),
    ]);
  },
};
