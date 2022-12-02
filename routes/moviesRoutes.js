const express = require('express');
const router = express.Router();
const MoviesControllers = require('../controllers/moviesControllers1');

router.get('/toprated', MoviesControllers.getMoviesTopRated);
router.get('/genre/:genre', MoviesControllers.getMoviesGenre);
router.get('/actor/:actor', MoviesControllers.getMoviesActor);
router.get('/title/:title', MoviesControllers.getMoviestitle);
router.get('/id/:id', MoviesControllers.getMoviesID);
router.get('/page/:page', MoviesControllers.getMovies);



module.exports = router;

