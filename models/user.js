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
      validate:{
        len:[1,50]
      }
      
    },
    surname: {
      type:DataTypes.STRING,
      validate:{
        len:[1,50]
      }
    },
    document: {
      type:DataTypes.STRING,
      unique: true,
      validate:{
        len:[1,50]
      }
    },
    address: {
      type:DataTypes.STRING,
      validate:{
        len:[1,50]
      }
    },
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        len:[1,50]
      }

    },
    
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[1,50]
      }

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