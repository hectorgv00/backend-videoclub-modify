'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      loan.belongsTo(models.user);


    }
  }
  loan.init({
    id_loan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    date_of_loan: DataTypes.DATE,
    date_of_return: DataTypes.DATE,

    price:DataTypes.FLOAT,

    userIdUser: {
      type: DataTypes.INTEGER,
      
        references: {
          model: 'users',
          key: 'id_user'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      
    }
  }, {
    sequelize,
    modelName: 'loan',
  });
  return loan;
};