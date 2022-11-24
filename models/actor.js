"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      actor.hasMany(models.movies)
      actor.hasMany(models.series)
    }
  }
  actor.init(
    {
      id_actor: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "actor",
    }
  );
  return actor;
};
