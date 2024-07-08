const express = require('express');
const passport = require('passport');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const { authenticateJWT, authorizeRole } = require('./middlewares/autorization');
const router = express.Router();

//router.use(authenticateJWT);
router.use("/users", user);
router.use("/classrooms", classroom);


module.exports = router;
