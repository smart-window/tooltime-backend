'use strict';
const bcrypt = require('bcrypt')
const uuid = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'locations', [{
                id: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
                name: 'New York Agency 1',
                description: 'Agency located in New York',
                address_1: '523 D 52th St',
                city: 'New York',
                state: 'NY',
                zip: '10018',
                phone: '914-239-4621',
                hours: '8 AM ~ 6 PM',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: '1f5f556f-bf1d-492a-bc71-088ab8bae560',
                name: 'New York Agency 2',
                description: 'Agency located in New York',
                address_1: '255 W 44th St',
                city: 'New York',
                state: 'NY',
                zip: '10036',
                phone: '315-904-5948',
                hours: '8 AM ~ 6 PM',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: '1f5f556f-bf1d-492a-bc71-088ab8bae561',
                name: 'Texas Agency 1',
                description: 'Agency located in Texas',
                address_1: '1918 Cadiz St',
                city: 'Dallas',
                state: 'TX',
                zip: '75201',
                phone: '516-560-8188',
                hours: '8 AM ~ 6 PM',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: '1f5f556f-bf1d-492a-bc71-088ab8bae562',
                name: 'Texas Agency 2',
                description: 'Agency located in Texas',
                address_1: '2204 Austin S',
                city: 'Houston',
                state: 'TX',
                zip: '77002',
                phone: '347-707-2357',
                hours: '8 AM ~ 6 PM',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: '1f5f556f-bf1d-492a-bc71-088ab8bae563',
                name: 'California Agency 1',
                description: 'Agency located in California',
                address_1: '1866 Turk Blvd',
                city: 'San Francisco',
                state: 'CA',
                zip: '94115',
                phone: '585-535-5021',
                hours: '8 AM ~ 6 PM',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {},
        )
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('locations', null, {});
    }
};