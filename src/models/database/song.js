'use strict';

module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      coverUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      audioUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "songs",
      timestamps: true,
    }
  );

  return Song;
};
