const { Op } = require("sequelize");
const { sequelize } = require("../models/index");
const models = require("../models/index");
const SeriesControllers = {};

// Encuentra series por id


SeriesControllers.getSeriesID = async (req, res) => {
    try {
      let { id } = req.params;
      let resp = await models.series.findAll({
        where: {
          id_series: id,
        },
      });
      res.send(resp);
    } catch (error) {
      res.send(error);
    }
  };

// Encuentra las series mejor valoradas


SeriesControllers.getSeriesTopRated = async (req, res) => {
    try {
        let resp = await models.series.findAll({where:{
            rank:{
                [Op.gt]: 8
            }
        }});
        res.send(resp);
      } catch (error) {
        res.send(error);
      }
};

// Encuentra las series por título


SeriesControllers.getSeriestitle = async (req,res) =>{
    try {
      let { title } = req.params;
          let resp = await models.series.findAll(
            {
              where: {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: "%" + title + "%"
                        }
                    },
                    {
                        genre: {
                            [Op.like]: "%" + title + "%"
                        }
                    }
                ]
        }
        }
          );
          res.send(resp);
        } catch (error) {
          res.send(error);        
  }}

// Encuentra las series por capitulo emitido 

SeriesControllers.getSeriesEmitido = async (req,res) =>{
    try {
          let resp = await models.series.findAll({
              where:{
                next_7_days: true
                  }
              }
          );
          res.send(resp);
        } catch (error) {
          res.send(error);        
  }}

// Encuentra las series por capitulo cinema

SeriesControllers.getSeriesCinema = async (req,res) =>{
    try {
          let resp = await models.series.findAll({
              where:{
                is_on_cinema: true
                  }
              }
          );
          res.send(resp);
        } catch (error) {
          res.send(error);        
  }}

  SeriesControllers.getSeries = async (req, res) => {
    try {
      let {page} = req.params
      let resp = await models.series.findAll({ offset: (page-1)*5, limit: 5 });
      res.send(resp);
    } catch (error) {
      res.send(error);
    }
  };

  SeriesControllers.getSeriesActor = async (req,res) =>{
    try {
      let { actor } = req.params;
          let resp = await sequelize.query(
            `  SELECT actors.name, series.title, series.genre, series.summary, series.poster, series.rank, series.articleIdArticles, series.episodes, series.seasons, series.next_7_days, series.is_on_cinema
            FROM actors 
            JOIN actorSeries ON actorSeries.actorIdActor = actors.id_actor
            JOIN series ON actorSeries.seriesIdSeries = series.id_series
            Where actors.name = "${actor}"  `, {type: sequelize.QueryTypes.SELECT}
            
            // actors.name = "%+${actor}+%"  
          )
          res.send(resp);
        } catch (error) {
          res.send(error);        
  }}


  SeriesControllers.getSeriesGenre = async (req, res) => {
    try {
      let { genre } = req.params;
      let resp = await models.series.findAll({
        where: {
          genre: genre,
        },
      });
      res.send(resp);
    } catch (error) {
      res.send(error);
    }
  };

module.exports = SeriesControllers;