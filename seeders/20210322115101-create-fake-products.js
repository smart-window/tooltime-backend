'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f01',
          name: '2200 WATT PORTABLE INVERTER GENERATOR',
          description:
            'CO Protect Technology – Stops. Alerts. Saves. Powerful protection against hazardous carbon monoxide.',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f02',
          name: '4000 WATT PORTABLE GAS GENERATOR',
          description:
            'The 4000 Watt Portable Gas Generator is powered by a 223cc engine with low oil shut off which protects the engine from damage. CO-Protect Technology automatically shuts down the generator if carbon monoxide levels become unsafe or rapidly increase. This generator is equipped with covered outlets to help protect it from even the toughest jobsites and features heavy duty wheels for transportation and durability. The 3.4 Gal. steel fuel tank provides up to 10 hours of runtime at 50% load. The 1 ¼” steel tube frame helps protect it from jobsite conditions.',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f03',
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT',
          description:
            'With an IP67 debris/water resistance rating, 1 meter drop protection, and a visible red beam, the 20V MAX* Tool Connect™ Green Rotary Tough laser equips users to work in the toughest conditions. Connect this rotary to our Tool Connect™ app to track the device, and receive bump, fall, and drop indications, as well as slope and line direction.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f01',
          name: '2200 WATT PORTABLE INVERTER GENERATOR',
          description:
            'CO Protect Technology – Stops. Alerts. Saves. Powerful protection against hazardous carbon monoxide.',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f02',
          name: '4000 WATT PORTABLE GAS GENERATOR',
          description:
            'The 4000 Watt Portable Gas Generator is powered by a 223cc engine with low oil shut off which protects the engine from damage. CO-Protect Technology automatically shuts down the generator if carbon monoxide levels become unsafe or rapidly increase. This generator is equipped with covered outlets to help protect it from even the toughest jobsites and features heavy duty wheels for transportation and durability. The 3.4 Gal. steel fuel tank provides up to 10 hours of runtime at 50% load. The 1 ¼” steel tube frame helps protect it from jobsite conditions.',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f03',
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT',
          description:
            'With an IP67 debris/water resistance rating, 1 meter drop protection, and a visible red beam, the 20V MAX* Tool Connect™ Green Rotary Tough laser equips users to work in the toughest conditions. Connect this rotary to our Tool Connect™ app to track the device, and receive bump, fall, and drop indications, as well as slope and line direction.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f01',
          name: '2200 WATT PORTABLE INVERTER GENERATOR',
          description:
            'CO Protect Technology – Stops. Alerts. Saves. Powerful protection against hazardous carbon monoxide.',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f02',
          name: '4000 WATT PORTABLE GAS GENERATOR',
          description:
            'The 4000 Watt Portable Gas Generator is powered by a 223cc engine with low oil shut off which protects the engine from damage. CO-Protect Technology automatically shuts down the generator if carbon monoxide levels become unsafe or rapidly increase. This generator is equipped with covered outlets to help protect it from even the toughest jobsites and features heavy duty wheels for transportation and durability. The 3.4 Gal. steel fuel tank provides up to 10 hours of runtime at 50% load. The 1 ¼” steel tube frame helps protect it from jobsite conditions.',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f03',
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT',
          description:
            'With an IP67 debris/water resistance rating, 1 meter drop protection, and a visible red beam, the 20V MAX* Tool Connect™ Green Rotary Tough laser equips users to work in the toughest conditions. Connect this rotary to our Tool Connect™ app to track the device, and receive bump, fall, and drop indications, as well as slope and line direction.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f01',
          name: '2200 WATT PORTABLE INVERTER GENERATOR',
          description:
            'CO Protect Technology – Stops. Alerts. Saves. Powerful protection against hazardous carbon monoxide.',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f02',
          name: '4000 WATT PORTABLE GAS GENERATOR',
          description:
            'The 4000 Watt Portable Gas Generator is powered by a 223cc engine with low oil shut off which protects the engine from damage. CO-Protect Technology automatically shuts down the generator if carbon monoxide levels become unsafe or rapidly increase. This generator is equipped with covered outlets to help protect it from even the toughest jobsites and features heavy duty wheels for transportation and durability. The 3.4 Gal. steel fuel tank provides up to 10 hours of runtime at 50% load. The 1 ¼” steel tube frame helps protect it from jobsite conditions.',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f03',
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT',
          description:
            'With an IP67 debris/water resistance rating, 1 meter drop protection, and a visible red beam, the 20V MAX* Tool Connect™ Green Rotary Tough laser equips users to work in the toughest conditions. Connect this rotary to our Tool Connect™ app to track the device, and receive bump, fall, and drop indications, as well as slope and line direction.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f01',
          name: '2200 WATT PORTABLE INVERTER GENERATOR',
          description:
            'CO Protect Technology – Stops. Alerts. Saves. Powerful protection against hazardous carbon monoxide.',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f02',
          name: '4000 WATT PORTABLE GAS GENERATOR',
          description:
            'The 4000 Watt Portable Gas Generator is powered by a 223cc engine with low oil shut off which protects the engine from damage. CO-Protect Technology automatically shuts down the generator if carbon monoxide levels become unsafe or rapidly increase. This generator is equipped with covered outlets to help protect it from even the toughest jobsites and features heavy duty wheels for transportation and durability. The 3.4 Gal. steel fuel tank provides up to 10 hours of runtime at 50% load. The 1 ¼” steel tube frame helps protect it from jobsite conditions.',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f03',
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT',
          description:
            'With an IP67 debris/water resistance rating, 1 meter drop protection, and a visible red beam, the 20V MAX* Tool Connect™ Green Rotary Tough laser equips users to work in the toughest conditions. Connect this rotary to our Tool Connect™ app to track the device, and receive bump, fall, and drop indications, as well as slope and line direction.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f01',
          name: '2200 WATT PORTABLE INVERTER GENERATOR',
          description:
            'CO Protect Technology – Stops. Alerts. Saves. Powerful protection against hazardous carbon monoxide.',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f02',
          name: '4000 WATT PORTABLE GAS GENERATOR',
          description:
            'The 4000 Watt Portable Gas Generator is powered by a 223cc engine with low oil shut off which protects the engine from damage. CO-Protect Technology automatically shuts down the generator if carbon monoxide levels become unsafe or rapidly increase. This generator is equipped with covered outlets to help protect it from even the toughest jobsites and features heavy duty wheels for transportation and durability. The 3.4 Gal. steel fuel tank provides up to 10 hours of runtime at 50% load. The 1 ¼” steel tube frame helps protect it from jobsite conditions.',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f03',
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT',
          description:
            'With an IP67 debris/water resistance rating, 1 meter drop protection, and a visible red beam, the 20V MAX* Tool Connect™ Green Rotary Tough laser equips users to work in the toughest conditions. Connect this rotary to our Tool Connect™ app to track the device, and receive bump, fall, and drop indications, as well as slope and line direction.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {})
  },
}
