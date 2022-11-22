'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('rols', [{
        id_rol:1,membership:"Admin",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
        {id_rol:2,membership:"FreeUser",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
        {id_rol:3,membership:"PremiumUser",createdAt:"2022-01-11",updatedAt:"2022-01-11",},
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
