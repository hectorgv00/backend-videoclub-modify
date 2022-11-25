'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.bulkInsert('actorSeries', [
      
      {id_actorseries:1,actorIdActor:7, seriesIdSeries:6, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorseries:2,actorIdActor:8, seriesIdSeries:1, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorseries:3,actorIdActor:9, seriesIdSeries:1, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorseries:4,actorIdActor:10, seriesIdSeries:2, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorseries:5,actorIdActor:11, seriesIdSeries:3, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorseries:6,actorIdActor:12, seriesIdSeries:3, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorseries:7,actorIdActor:13, seriesIdSeries:4, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorseries:8,actorIdActor:14, seriesIdSeries:5, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorseries:9,actorIdActor:15, seriesIdSeries:7, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorseries:10,actorIdActor:16, seriesIdSeries:8, createdAt:"2022-01-11",updatedAt:"2022-01-11",},

      {id_actorseries:11,actorIdActor:17, seriesIdSeries:9, createdAt:"2022-01-11",updatedAt:"2022-01-11",},


], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
