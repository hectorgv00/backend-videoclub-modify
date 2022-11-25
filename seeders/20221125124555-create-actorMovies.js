'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('actorMovies', [
      
      {id_actorMovies:1,actorIdActor:1, movieIdMovie:1, createdAt:"2022-01-11",updatedAt:"2022-01-11",},

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
