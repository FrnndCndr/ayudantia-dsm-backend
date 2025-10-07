"use strict";

module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define(
    "role",
    {
      id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "role",
      timestamps: false,
    }
  );

  role.associate = function (models) {
    role.hasMany(models.user, { foreignKey: "role_id" });
  };

  return role;
};
