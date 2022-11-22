'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [
        {
          id_user: 1,
          name: "Joan",
          surname: "Macarra",
          document: "000000001",
          address: "El mundo",
          email: "Joan@macarra.com",
          rolIdRol: 1,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 2,
          name: "Susanna",
          surname: "Rothwell",
          document: "76-425-2042",
          address: "80 Bay Terrace",
          email: "srothwell1@tmall.com",
          rolIdRol: 1,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 3,
          name: "Costanza",
          surname: "Habeshaw",
          document: "65-858-3543",
          address: "54 Manufacturers Terrace",
          email: "chabeshaw2@hao123.com",
          rolIdRol: 1,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 4,
          name: "Martino",
          surname: "Gaymer",
          document: "80-550-7247",
          address: "2494 Glendale Street",
          email: "mgaymer3@nytimes.com",
          rolIdRol: 2,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 5,
          name: "Cristiano",
          surname: "Blagden",
          document: "35-377-9050",
          address: "4555 Lakeland Road",
          email: "cblagden4@artisteer.com",
          rolIdRol: 2,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 6,
          name: "Caressa",
          surname: "Speck",
          document: "62-380-2690",
          address: "1183 Lotheville Alley",
          email: "cspeck5@paypal.com",
          rolIdRol: 3,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 7,
          name: "Alexine",
          surname: "Whiffin",
          document: "87-387-4658",
          address: "1796 Badeau Avenue",
          email: "awhiffin6@hibu.com",
          rolIdRol: 1,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 8,
          name: "Laurence",
          surname: "Ahrendsen",
          document: "27-018-4303",
          address: "03487 Summit Junction",
          email: "lahrendsen7@cnbc.com",
          rolIdRol: 2,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 9,
          name: "Curry",
          surname: "Phippen",
          document: "16-981-9967",
          address: "811 Morrow Terrace",
          email: "cphippen8@multiply.com",
          rolIdRol: 2,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 10,
          name: "Eduino",
          surname: "Chang",
          document: "44-006-6911",
          address: "5 Shoshone Drive",
          email: "echang9@spiegel.de",
          rolIdRol: 3,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 11,
          name: "Charlton",
          surname: "Willoughby",
          document: "88-664-1802",
          address: "99896 Katie Lane",
          email: "cwilloughbya@bloglovin.com",
          rolIdRol: 3,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 12,
          name: "Wrennie",
          surname: "Edney",
          document: "28-749-3700",
          address: "49 Weeping Birch Crossing",
          email: "wedneyb@marriott.com",
          rolIdRol: 2,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 13,
          name: "Edwina",
          surname: "MacCafferty",
          document: "48-864-9112",
          address: "65 Ridgeview Point",
          email: "emaccaffertyc@independent.co.uk",
          rolIdRol: 3,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 14,
          name: "Binni",
          surname: "Floyde",
          document: "63-949-0476",
          address: "5084 Vera Way",
          email: "bfloyded@mapy.cz",
          rolIdRol: 3,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 15,
          name: "Siusan",
          surname: "Hanburry",
          document: "70-220-4072",
          address: "2 Charing Cross Court",
          email: "shanburrye@forbes.com",
          rolIdRol: 2,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 16,
          name: "Sherwood",
          surname: "Denslow",
          document: "06-845-0507",
          address: "996 Anderson Point",
          email: "sdenslowf@dagondesign.com",
          rolIdRol: 1,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 17,
          name: "Suzette",
          surname: "Sherme",
          document: "73-814-3012",
          address: "56 Elgar Terrace",
          email: "sshermeg@webnode.com",
          rolIdRol: 2,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 18,
          name: "Sylvan",
          surname: "Dautry",
          document: "03-948-6365",
          address: "325 Gulseth Crossing",
          email: "sdautryh@yellowbook.com",
          rolIdRol: 3,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 19,
          name: "Hollie",
          surname: "Lebbon",
          document: "05-466-2112",
          address: "38469 Spohn Alley",
          email: "hlebboni@whitehouse.gov",
          rolIdRol: 3,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
        }, {
          id_user: 20,
          name: "Rabi",
          surname: "Laborda",
          document: "36-825-1306",
          address: "25 Harbort Way",
          email: "rlabordaj@bigcartel.com",
          rolIdRol: 2,
          password: "1234554321OK",
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11"
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
