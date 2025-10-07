'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("product", [
      { id_product: 1, name: "Product A", price: 10.0 },
      { id_product: 2, name: "Product B", price: 20.0 },
      { id_product: 3, name: "Product C", price: 30.0 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product", null, {});
  },
};