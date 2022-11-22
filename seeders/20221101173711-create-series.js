'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('series', [{
      articleIdArticles:4,
      id_series:1,
      title: "Breaking Bad",
      summary: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
      date: "2008-01-20",
      createdAt:"2022-01-11",
      updatedAt:"2022-01-11",
      poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      episodes:62,
      seasons:5,
      rank:8.8,
      is_on_cinema:true,
      next_7_days:false
   },
   {
    articleIdArticles:5,
    id_series:2,
    title: "House of the Dragon",
    summary: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
    date:"2022-09-01",
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    episodes:7,
    seasons:1,
    rank:8.5,
    is_on_cinema:false,
    next_7_days:true

   },
   {
    articleIdArticles:6,
    id_series:3,
    title: "The Lord of the Rings: The Rings of Power",
    summary: "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
    date:"2022-09-21",
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
    episodes:8,
    seasons:1,
    rank:7.6,
    is_on_cinema:true,
    next_7_days:false

   },
   {
    articleIdArticles:9,
    id_series:4,
    title: "Dahmer – Monster: The Jeffrey Dahmer Story",
    summary: "Across more than a decade, 17 teen boys and young men were murdered by convicted killer Jeffrey Dahmer. How did he evade arrest for so long?",
    date:"2015-10-19",
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f2PVrphK0u81ES256lw3oAZuF3x.jpg",
    episodes:10,
    seasons:1,
    rank:8.2,
    is_on_cinema:true,
    next_7_days:false

   },
   {
    articleIdArticles:10,
    id_series:5,
    title: "Miraculous: Tales of Ladybug & Cat Noir",
    summary:"Normal high school kids by day, protectors of Paris by night! Miraculous follows the heroic adventures of Marinette and Adrien as they transform into Ladybug and Cat Noir and set out to capture akumas, creatures responsible for turning the people of Paris into villains. But neither hero knows the other’s true identity – or that they’re classmates!",
    date:"2010-10-31",
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/psDcRgUX38cIeGeADwLRPyO7SYC.jpg",
    episodes:108,
    seasons:5,
    rank:8,
    is_on_cinema:false,
    next_7_days:true

   },
   {
    articleIdArticles:14,
    id_series:6,
    title: "Game of Thrones",
    summary:"Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond",
    date:"2011-04-17",
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    episodes:73,
    seasons:8,
    rank:8.4,
    is_on_cinema:false,
    next_7_days:false
   },
   {
    articleIdArticles:15,
    id_series:7,
    title: "The Peripheral",
    summary:"Stuck in a small Appalachian town, a young woman’s only escape from the daily grind is playing advanced video games. She is such a good player that a company sends her a new video game system to test…but it has a surprise in store. It unlocks all of her dreams of finding a purpose, romance, and glamour in what seems like a game…but it also puts her and her family in real danger",
    date:"2022-08-18",
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ccBe5BVeibdBEQU7l6P6BubajWV.jpg",
    episodes:2,
    seasons:1,
    rank:8.3,
    is_on_cinema:false,
    next_7_days:true
   },
   {
    articleIdArticles:16,
    id_series:8,
    title: "She-Hulk: Attorney at Law",
    summary:"Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk",
    date:"2022-08-18",
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg",
    episodes:9,
    seasons:1,
    rank:6.8,
    is_on_cinema:true,
    next_7_days:false
   },
   {
    articleIdArticles:21,
    id_series:9,
    title: "La Reina del Sur",
    summary:"After years of blood, sweat and tears, a woman of humble origin ends up becoming a drug trafficking legend, with all that that means...",
    date:"2013-12-02",
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uBTlJDdPpRxYTfUnKw4wbuIGSEK.jpg",
    episodes:131,
    seasons:3,
    rank:7.7,
    is_on_cinema:true,
    next_7_days:true
   },
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
