const express = require('express');
const router = express.Router();
const SeriesControllers = require('../controllers/SeriesControllers');


router.get('/actor/:actor', SeriesControllers.getSeriesActor);
router.get('/toprated', SeriesControllers.getSeriesTopRated);
router.get('/emision/', SeriesControllers.getSeriesEmitido);
router.get('/cinema/', SeriesControllers.getSeriesCinema);
router.get('/:id', SeriesControllers.getSeriesID);
router.get('/title/:title', SeriesControllers.getSeriestitle);
router.get('/page/:page', SeriesControllers.getSeries);


module.exports = router;
