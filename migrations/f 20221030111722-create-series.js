'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('series', {
      id_series:{
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
      episodes: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.FLOAT
      },
      seasons: {
        type: Sequelize.INTEGER
      },
      next_7_days: {
        type: Sequelize.BOOLEAN
      },
      is_on_cinema: Sequelize.BOOLEAN,

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
    await queryInterface.dropTable('series');
  }
};