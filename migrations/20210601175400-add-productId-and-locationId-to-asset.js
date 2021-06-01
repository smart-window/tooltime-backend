'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('assets', 'productId', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('assets', 'locationId', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('assets', 'productId'),
      queryInterface.removeColumn('assets', 'locationId')
    ]);
  },
};
