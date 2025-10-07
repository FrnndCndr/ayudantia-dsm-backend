'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("role", [
      { id_role: 1, name: "admin" },
      { id_role: 2, name: "client" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("role", null, {});
  },
};
