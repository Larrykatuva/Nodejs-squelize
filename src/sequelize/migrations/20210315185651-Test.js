'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Tests', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        marks: Sequelize.INTEGER,
        email: {
          type: Sequelize.STRING,
          unique: true
        },
        teacher: Sequelize.STRING
     });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Tests');
  }
};
