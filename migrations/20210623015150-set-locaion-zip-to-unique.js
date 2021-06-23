'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addConstraint('locations', {
                fields: ['zip'],
                type: 'unique',
                name: 'zip_unique'
            })
        ]);
    },

    down: (queryInterface) => {
        return Promise.all([
            queryInterface.removeConstraint('locations', 'zip_unique')
        ]);
    },
};