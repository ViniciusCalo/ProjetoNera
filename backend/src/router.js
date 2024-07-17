const express = require('express');
const passport = require('passport');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const teacherController = require('./controllers/TeacherController');
const router = express.Router();

router.use("/users", user);
router.use("/classrooms", classroom);


module.exports = router;
