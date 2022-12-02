const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/UsersControllers');
const { authBearerMiddleware, isAdmin } = require("../middleware/auth.middleware")



router.post("/login", usersControllers.login)
router.post("/register", usersControllers.register)
router.get("/all", authBearerMiddleware, isAdmin, usersControllers.findAll);
router.get('/findcurrentuser',authBearerMiddleware, usersControllers.findCurrentUser);
router.put('/modify',authBearerMiddleware, usersControllers.modifyCurrentUser);
router.delete('/delete',authBearerMiddleware, usersControllers.deleteCurrentUser);
router.delete('/deleteprofile/',authBearerMiddleware, isAdmin, usersControllers.deleteUser);




module.exports = router;

