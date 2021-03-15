'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      person_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       },
       name:  Sequelize.STRING,
       email: Sequelize.STRING,
       phone:  Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
};
