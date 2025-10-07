'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      id_product: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "product",
      timestamps: false,
    }
  );

  return product;
};
