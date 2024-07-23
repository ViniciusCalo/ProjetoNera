const express = require('express');
const passport = require('passport');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const teacherController = require('./controllers/TeacherController');
const achievement = require('../src/controllers/AchievementsController');
const router = express.Router();

router.use("/users", user);
router.use("/classrooms", classroom);
router.use("/api",achievement);


module.exports = router;
