'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('actorMovies', [
      
      {id_actorMovies:1,actorIdActor:18, movieIdMovie:1, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:2,actorIdActor:1, movieIdMovie:2, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:3,actorIdActor:19, movieIdMovie:3, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:4,actorIdActor:20, movieIdMovie:4, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:5,actorIdActor:21, movieIdMovie:5, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:6,actorIdActor:22, movieIdMovie:6, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:7,actorIdActor:23, movieIdMovie:7, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:8,actorIdActor:24, movieIdMovie:9, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:9,actorIdActor:25, movieIdMovie:10, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:10,actorIdActor:26, movieIdMovie:11, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:11,actorIdActor:27, movieIdMovie:12, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:12,actorIdActor:1, movieIdMovie:13, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:13,actorIdActor:1, movieIdMovie:14, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:14,actorIdActor:2, movieIdMovie:15, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:15,actorIdActor:2, movieIdMovie:16, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:16,actorIdActor:22, movieIdMovie:17, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:17,actorIdActor:22, movieIdMovie:18, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:18,actorIdActor:5, movieIdMovie:19, createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actorMovies:19,actorIdActor:5, movieIdMovie:19, createdAt:"2022-01-11",updatedAt:"2022-01-11",},

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
