const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "localDb.sqlite",
});

module.exports = sequelize;
