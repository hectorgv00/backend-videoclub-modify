'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.loan);
      user.belongsTo(models.rol);

    }
  }
  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    surname: {
      type:DataTypes.STRING,
    },
    document: {
      type:DataTypes.STRING,
      unique: true,
    },
    address: {
      type:DataTypes.STRING,
    },
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,

    },
    
    password:{
      type:DataTypes.STRING,
      allowNull:false,

    },
    rolIdRol:{
      type: DataTypes.INTEGER,
      defaultValue: 2,
      references: {
          model: 'rols',
          key: 'id_rol'
      }
  }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};