const { Op } = require("sequelize");
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
          let resp = await models.series.findAll({
              where:{
                  title: title
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

module.exports = SeriesControllers;