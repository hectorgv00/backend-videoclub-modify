const { Op } = require("sequelize");
const models = require("../models/index");
const MoviesControllers = {};

// Encuentra película por id

MoviesControllers.getMoviesID = async (req, res) => {
  try {
    let { id } = req.params;
    let resp = await models.movies.findAll({
      where: {
        id_movies: id,
      },
    });
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
};

// Encuentra las películas mejor valoradas

MoviesControllers.getMoviesTopRated = async (req, res) => {
    try {
        let resp = await models.movies.findAll({where:{
            rank:{
                [Op.gt]: 7.5
            }
        }});
        res.send(resp);
      } catch (error) {
        res.send(error);
      }
    };

// Encuentra las películas por título

MoviesControllers.getMoviestitle = async (req,res) =>{
  try {
    let { title } = req.params;
        let resp = await models.movies.findAll({
            where:{
                title: title
                }
            }
        );
        res.send(resp);
      } catch (error) {
        res.send(error);        
}}

// Encuentra las películas por género

MoviesControllers.getMoviesGenre = async (req,res) =>{
  try {
    let { genre } = req.params;
        let resp = await models.movies.findAll({
            where:{
                genre: genre
                }
            }
        );
        res.send(resp);
      } catch (error) {
        res.send(error);        
}}


module.exports = MoviesControllers;
