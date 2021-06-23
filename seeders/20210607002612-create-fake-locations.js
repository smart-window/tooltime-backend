'use strict';
const bcrypt = require('bcrypt')
const uuid = require('uuid');

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'locations', [{
                    id: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
                    name: 'New York 1',
                    city: 'New York',
                    state: 'NY',
                    zip: '10018',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '1f5f556f-bf1d-492a-bc71-088ab8bae560',
                    name: 'New York 2',
                    address_1: '255 W 44th St',
                    city: 'New York',
                    state: 'NY',
                    zip: '10036',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '1f5f556f-bf1d-492a-bc71-088ab8bae561',
                    name: 'Texas 1',
                    address_1: '1918 Cadiz St',
                    city: 'Dallas',
                    state: 'TX',
                    zip: '75201',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '1f5f556f-bf1d-492a-bc71-088ab8bae562',
                    name: 'Texas 2',
                    address_1: '2204 Austin S',
                    city: 'Houston',
                    state: 'TX',
                    zip: '77002',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: '1f5f556f-bf1d-492a-bc71-088ab8bae563',
                    name: 'California 1',
                    address_1: '1866 Turk Blvd',
                    city: 'San Francisco',
                    state: 'CA',
                    zip: '94115',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ], {},
        )
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('locations', null, {});
    }
};