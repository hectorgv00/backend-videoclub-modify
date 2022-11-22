const express = require('express');
const router = express.Router();
const SeriesControllers = require('../controllers/SeriesControllers');


router.get('/toprated', SeriesControllers.getSeriesTopRated);
router.get('/emision/', SeriesControllers.getSeriesEmitido);
router.get('/cinema/', SeriesControllers.getSeriesCinema);
router.get('/:id', SeriesControllers.getSeriesID);
router.get('/title/:title', SeriesControllers.getSeriestitle);


module.exports = router;
