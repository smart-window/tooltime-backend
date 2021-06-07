'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'assets',
      [
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854634',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca591',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854635',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca591',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854636',
          purchaseDate: '2021-06-06',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca592',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854637',
          purchaseDate: '2021-06-06',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca592',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854638',
          purchaseDate: '2021-06-06',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca593',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854639',
          purchaseDate: '2021-06-06',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca593',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854640',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca594',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854649',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca594',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854650',
          purchaseDate: '2021-06-06',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca595',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854651',
          purchaseDate: '2021-06-06',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca595',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854652',
          purchaseDate: '2021-06-06',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca596',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854653',
          purchaseDate: '2021-06-06',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca596',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854654',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca597',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854655',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca597',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854656',
          purchaseDate: '2021-06-06',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca598',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854657',
          purchaseDate: '2021-06-06',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca598',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854658',
          purchaseDate: '2021-06-06',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca599',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854659',
          purchaseDate: '2021-06-06',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca599',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854660',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca600',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854661',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca600',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854662',
          purchaseDate: '2021-06-06',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca601',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854663',
          purchaseDate: '2021-06-06',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca601',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854664',
          purchaseDate: '2021-06-06',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca602',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854665',
          purchaseDate: '2021-06-06',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca602',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854666',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca603',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 2',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854667',
          purchaseDate: '2021-06-06',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca603',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854668',
          purchaseDate: '2021-06-06',
          images:
            'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca604',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854669',
          purchaseDate: '2021-06-06',
          images:
          'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca605',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '2200 WATT PORTABLE INVERTER GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854670',
          purchaseDate: '2021-06-06',
          images:
          'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca606',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4000 WATT PORTABLE GAS GENERATOR 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854671',
          purchaseDate: '2021-06-06',
          images:
          'https://cdn11.bigcommerce.com/s-qjun8/images/stencil/1280x1280/products/2340/2647/115-dg6300b__20691.1416725965.jpg?c=2,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNR4000/DXGNR4000_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca607',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* TOOL CONNECT™ GREEN TOUGH ROTARY LASER KIT 1',
          make: 'TOOLTIME MAKER',
          model: 'TOOLTIME MODEL',
          sn: '764264-7854672',
          purchaseDate: '2021-06-06',
          images:
          'https://www.dewalt.com/NA/product/images/3000x3000x96/DW080LGSK/DW080LGSK_K2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXGNI2200/DXGNI2200_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca608',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('assets', null, {})
  },
}
