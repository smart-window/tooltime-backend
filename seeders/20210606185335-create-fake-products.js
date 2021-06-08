'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          id: "1",
          categoryId: '1',
          sectionId: '1',
          name: '6" (150MM) BENCH GRINDER',
          description:
            'The DW756 6" Bench Grinder has a powerful 5/8 HP 3,450 rpm induction motor for high-speed material removal. Durability from rugged cast iron base to prolong life. Ideal for large grinding applications.',
          images:
            'https://generatorbible.com/wp-content/uploads/Dewalt-DXGNi2200-1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW079LRK/DW079LRK_K1.jpg',
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
