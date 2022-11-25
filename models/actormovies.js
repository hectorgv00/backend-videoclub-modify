'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actorMovies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  actorMovies.init({
    id_actorMovies: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    actorIdActor: {      
      type: DataTypes.INTEGER,
      references: {
        model: 'actors',
        key: 'id_actor'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    movieIdMovie:{      
      type: DataTypes.INTEGER,
      references: {
        model: 'movies',
        key: 'id_movies'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }
  }, {
    sequelize,
    modelName: 'actorMovies',
  });
  return actorMovies;
};