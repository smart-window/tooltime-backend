'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      leadIn: Sequelize.STRING,
      valueProps: {
        type: Sequelize.TEXT,
        get() {
          const v = this.getDataValue('valueProps')
          return v ? JSON.parse(v) : []
        },
        set(v) {
          this.setDataValue('valueProps', JSON.stringify(v))
        },
      },
      depositAmt: Sequelize.FLOAT,
      termsVer: Sequelize.STRING,
      amt: Sequelize.FLOAT,
      ppy: Sequelize.INTEGER,
      autorenew: Sequelize.BOOLEAN,
      stripePriceId: Sequelize.STRING,
      active: Sequelize.BOOLEAN,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('offers')
  },
}
