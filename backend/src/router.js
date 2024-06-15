const express = require('express');
const user = require('../src/controllers/UserController');
const classroom = require('../src/controllers/ClassroomController');
const classroomStudent = require('../src/controllers/ClassroomStudentController');
const router = express.Router();

/*router.use() should use the router instead of call all the rout as 
get or post on this file*/
router.use(user.getAll);
router.use(user.getUserById);
router.use(user.createUser);
router.use(user.login);

router.use(classroom.getAllClassrooms);
router.use(classroom.getAllClassroomByTeacherId);
router.use(classroom.createClassroom);


module.exports = router;
