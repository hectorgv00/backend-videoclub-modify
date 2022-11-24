'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('actors', [
      
      {id_actor:1,name:"Dwain Jhonson",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:2,name:"John Travolta",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:3,name:"Meryl Streep",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:4,name:"Tom Holland",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:5,name:"Jim Carrey",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:6,name:"Scarlett Johansson",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
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
