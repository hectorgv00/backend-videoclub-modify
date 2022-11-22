'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('articles', [
        {id_articles:1,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"
    },
        {id_articles:2,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"
    },
        {id_articles:3,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"
    },
        {id_articles:4,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"
    },
        {id_articles:5,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"
    },
        {id_articles:6,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"
    },
        {id_articles:7,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"
    },
        {id_articles:8,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"
    },
        {id_articles:9,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"
    },
        {id_articles:10,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:11,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:12,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:13,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:14,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:15,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:16,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:17,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:18,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:19,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:20,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:21,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:22,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:23,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:24,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:25,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:26,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:27,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:28,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:29,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:30,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:31,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:32,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:33,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:34,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:35,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:36,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:37,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:38,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:39,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
        {id_articles:40,
        createdAt:"2022-01-11",
      updatedAt:"2022-01-11"},
      
      
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
