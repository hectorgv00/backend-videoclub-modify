const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const { authBearerMiddleware, isAdmin } = require("../middleware/auth.middleware")



router.post("/login", usersControllers.login)
router.post("/register", usersControllers.register)
router.get("/all", authBearerMiddleware, isAdmin, usersControllers.findAll);
router.get('/findcurrentuser',authBearerMiddleware, usersControllers.findCurrentUser);
router.put('/modify',authBearerMiddleware, usersControllers.modifyCurrentUser);
router.delete('/deleteprofile/:mail',authBearerMiddleware, isAdmin, usersControllers.deleteUser);




module.exports = router;

