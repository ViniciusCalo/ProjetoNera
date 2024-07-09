const express = require('express');
const user = require('../src/controllers/UserController');
const classroom = require('../src/controllers/ClassroomController');
const classroomStudent = require('../src/controllers/ClassroomStudentController');
const achievement = require('../src/controllers/AchievementsController');
const router = express.Router();

/*router.use() should use the router instead of call all the rout as 
get or post on this file*/
// router.use(user.all);
// router.use(classroom.all);
// router.use(classroomStudent.all);
router.use("/api",achievement);

module.exports = router;
