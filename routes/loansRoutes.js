const express = require('express');
const router = express.Router();
const loansEndpoints = require('../controllers/loansControllers');
const { authBearerMiddleware, isAdmin } = require("../middleware/auth.middleware")



router.post('/newloan', authBearerMiddleware, loansEndpoints.newLoan);
router.put('/modifyloan', authBearerMiddleware, loansEndpoints.modifyLoan);
router.get('/myloans', authBearerMiddleware, loansEndpoints.myLoans);
router.get('/myloans/series', authBearerMiddleware, loansEndpoints.myLoansSeries);
router.get('/myloans/movies', authBearerMiddleware, loansEndpoints.myLoansMovies);
router.get('/allloans/', authBearerMiddleware, isAdmin, loansEndpoints.allLoans);




module.exports = router;
