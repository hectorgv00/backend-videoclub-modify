const express = require('express');
const router = express.Router();
const moviesRoutes = require('./routes/moviesRoutes.js');
const seriesRoutes = require('./routes/seriesRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const loansRoutes = require('./routes/loansRoutes.js');
const { authBearerMiddleware, isValidRoleAdmin } = require("./middleware/auth.middleware")



router.use('/movies', moviesRoutes);
router.use('/series', seriesRoutes);
router.use('/users', userRoutes);
router.use('/loans', loansRoutes);


module.exports = router

