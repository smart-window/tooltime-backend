'use strict';
const bcrypt = require('bcrypt')
const uuid = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'service_area', [{
                id: '1ad324a8-e003-4c68-b01a-cb3328a8b5d0',
                locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
                name: 'New York Service Area 1',
                city: 'Ridgewood',
                state: 'NY',
                zip: '11385',
                latitude: 40.7006472,
                longitude: -73.8894227,
                active: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: '1ad324a8-e003-4c68-b01a-cb3328a8b5d1',
                locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae560',
                name: 'New York Service Area 2',
                city: 'Brooklyn',
                state: 'NY',
                zip: '11221',
                latitude: 40.6913401,
                longitude: -73.9278789,
                active: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: '1ad324a8-e003-4c68-b01a-cb3328a8b5d2',
                locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae561',
                name: 'Texas Service Area 1',
                city: 'Mission',
                state: 'TX',
                zip: '78572',
                latitude: 26.2293625,
                longitude: -98.378613,
                active: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: '1ad324a8-e003-4c68-b01a-cb3328a8b5d3',
                locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae562',
                name: 'Texas Service Area 2',
                city: 'Brownsville',
                state: 'TX',
                zip: '78520',
                latitude: 25.9632642,
                longitude: -97.5504526,
                active: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: '1ad324a8-e003-4c68-b01a-cb3328a8b5d4',
                locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae563',
                name: 'California Service Area',
                city: 'Los Angeles',
                state: 'CA',
                zip: '90022',
                latitude: 34.0237282,
                longitude: -118.1562745,
                active: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {},
        )
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('service_area', null, {});
    }
};