'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('loans', [
        
          { id_loan: 1,
            date_of_loan: "2022-01-22 03:35:14",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 1,
            createdAt: "2022-06-01 09:54:51",
            updatedAt: "2022-04-15 23:20:33",
            articleIdArticles: 3
          },
          {
            id_loan: 2,
            date_of_loan: "2022-08-07 05:31:43",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 2,
            createdAt: "2022-08-13 22:08:58",
            updatedAt: "2021-12-29 18:35:42",
            articleIdArticles: 3
          },
          {
            id_loan: 3,
            date_of_loan: "2022-08-07 21:14:16",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 3,
            createdAt: "2022-03-08 22:49:25",
            updatedAt: "2022-05-26 08:27:08",
            articleIdArticles: 3
          },
          {
            id_loan: 4,
            date_of_loan: "2022-02-18 14:47:24",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 4,
            createdAt: "2022-01-27 20:47:58",
            updatedAt: "2022-09-06 10:12:55",
            articleIdArticles: 3
          },
          {
            id_loan: 5,
            date_of_loan: "2022-02-22 17:23:31",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 5,
            createdAt: "2022-04-03 13:26:03",
            updatedAt: "2022-03-06 17:01:22",
            articleIdArticles: 3
          },
          {
            id_loan: 6,
            date_of_loan: "2021-11-05 21:58:41",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 6,
            createdAt: "2022-04-21 00:44:13",
            updatedAt: "2021-12-19 17:20:38",
            articleIdArticles: 3
          },
          {
            id_loan: 7,
            date_of_loan: "2021-12-01 05:37:03",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 7,
            createdAt: "2022-03-05 12:20:59",
            updatedAt: "2022-07-09 17:32:09",
            articleIdArticles: 3
          },
          {
            id_loan: 8,
            date_of_loan: "2022-03-23 07:48:57",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 8,
            createdAt: "2022-10-11 13:52:16",
            updatedAt: "2022-04-15 02:55:32",
            articleIdArticles: 3
          },
          {
            id_loan: 9,
            date_of_loan: "2022-10-03 10:13:21",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 9,
            createdAt: "2022-01-10 00:00:51",
            updatedAt: "2022-05-24 06:42:08",
            articleIdArticles: 3
          },
          {
            id_loan: 10,
            date_of_loan: "2021-11-18 23:07:15",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 10,
            createdAt: "2022-07-16 21:47:04",
            updatedAt: "2022-10-09 15:31:12",
            articleIdArticles: 3
          },
          {
            id_loan: 11,
            date_of_loan: "2022-05-02 02:27:36",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 11,
            createdAt: "2022-10-31 19:50:20",
            updatedAt: "2022-07-14 23:03:11",
            articleIdArticles: 3
          },
          {
            id_loan: 12,
            date_of_loan: "2021-11-11 00:07:24",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 12,
            createdAt: "2022-07-28 18:46:55",
            updatedAt: "2022-10-02 05:21:31",
            articleIdArticles: 3
          },
          {
            id_loan: 13,
            date_of_loan: "2022-10-22 01:23:15",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 13,
            createdAt: "2021-12-27 09:41:33",
            updatedAt: "2022-10-12 02:11:00",
            articleIdArticles: 3
          },
          {
            id_loan: 14,
            date_of_loan: "2022-03-30 18:32:50",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 14,
            createdAt: "2022-05-09 04:05:09",
            updatedAt: "2022-02-21 17:31:41",
            articleIdArticles: 3
          },
          {
            id_loan: 15,
            date_of_loan: "2021-12-15 09:26:17",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 15,
            createdAt: "2022-02-01 01:03:20",
            updatedAt: "2022-06-14 16:13:59",
            articleIdArticles: 3
          },
          {
            id_loan: 16,
            date_of_loan: "2022-01-29 11:28:43",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 16,
            createdAt: "2022-10-01 05:43:23",
            updatedAt: "2021-11-16 22:20:34",
            articleIdArticles: 3
          },
          {
            id_loan: 17,
            date_of_loan: "2022-08-26 22:40:06",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 17,
            createdAt: "2021-12-14 10:45:01",
            updatedAt: "2022-08-10 11:19:40",
            articleIdArticles: 3
          },
          {
            id_loan: 18,
            date_of_loan: "2022-01-10 19:41:07",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 18,
            createdAt: "2022-02-27 16:12:10",
            updatedAt: "2022-07-23 08:52:00",
            articleIdArticles: 3
          },
          {
            id_loan: 19,
            date_of_loan: "2021-12-19 11:18:20",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 19,
            createdAt: "2022-07-24 02:42:47",
            updatedAt: "2022-07-01 21:39:49",
            articleIdArticles: 3
          },
          {
            id_loan: 20,
            date_of_loan: "2022-08-24 16:40:13",
            date_of_return: "2022-12-12 06:32:43",
            price: 66,
            userIdUser: 20,
            createdAt: "2022-02-01 05:33:06",
            updatedAt: "2022-01-06 02:23:59",
            articleIdArticles: 3
          }
        
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
