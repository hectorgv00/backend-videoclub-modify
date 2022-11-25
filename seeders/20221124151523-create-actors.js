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
      {id_actor:7,name:"Jason Momoa",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:8,name:"Bryan Cranston",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:9,name:"Aaron Paul",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:10,name:"Matt Smith",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:11,name:"Peter Mullan",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:12,name:"Charles Edwards",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:13,name:"Evan Peters",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:14,name:"Adeline Chetail",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:15,name:"Chloe Grace",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:16,name:"Tatiana Maslany",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:17,name:"Kate del Castillo",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:18,name:"Lauren LaVera",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:19,name:"Sydney Craven",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:20,name:"Isabelle Fuhrman",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:21,name:"Sarah Jessica Parker",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:22,name:"Tom Cruise",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:23,name:"Jonny Weston",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:24,name:"Jared Leto",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:25,name:"Viola Davis",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:26,name:"Jacob Tremblay",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
      {id_actor:27,name:"Sosie Bacon",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
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
