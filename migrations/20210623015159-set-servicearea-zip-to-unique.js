'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addConstraint('service_area', {
                fields: ['zip'],
                type: 'unique',
                name: 'zip_unique'
            })
        ]);
    },

    down: (queryInterface) => {
        return Promise.all([
            queryInterface.removeConstraint('service_area', 'zip_unique')
        ]);
    },
};