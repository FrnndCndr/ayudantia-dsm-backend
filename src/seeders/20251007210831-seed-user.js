"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const adminPassword = await bcrypt.hash("admin123", 10);
    const clientPassword = await bcrypt.hash("client123", 10);


    await queryInterface.bulkInsert("user", [
      { 
        id_user: 1, 
        email: "admin@example.com", 
        password: adminPassword, 
        role_id: 1 
      },
      { 
        id_user: 2, 
        email: "client@example.com", 
        password: clientPassword, 
        role_id: 2 
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user", null, {});
  },
};
