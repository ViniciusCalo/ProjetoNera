const express = require('express');
const passport = require('passport');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const { authenticateJWT, authorizeRole } = require('./middlewares/autorization');
const achievement = require('../src/controllers/AchievementsController');
const router = express.Router();

//router.use(authenticateJWT);
// router.use("/users", user);
// router.use("/classrooms", classroom);
// router.use(classroomStudent.all);
router.use("/api",achievement);

module.exports = router;
