'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      
      id_movie:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      id_articles: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id_articles'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      
      title: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.TEXT
      },
      date: {
        type: Sequelize.DATE
      },
      poster: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      
      rank: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};