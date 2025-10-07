'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user",
        {
            id_user: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "role",
                    key: "id_role",
                },
            },
        },
        {
            tableName: "user",
            timestamps: false,
        }
    );

    user.associate = function (models) {
        user.belongsTo(models.role, { foreignKey: "role_id" });
    };

    return user;
};
