const express = require('express');
const userController = require('../src/controllers/UserController');
const classroom = require('../src/controllers/ClassroomController');
const classroomStudent = require('../src/controllers/ClassroomStudentController');
const router = express.Router();

/*router.use() should use the router instead of call all the rout as 
get or post on this file*/

router.get('/user', userController.getAll);
router.get('/user/:id', userController.getUserById);
router.post('/user/register', userController.createUser)
router.post('/user/login', userController.login);

router.get('/user/teacher/getAllClassrooms', classroom.getAllClassrooms);
router.get('/user/teacher/getAllClassrooms/:id', classroom.getAllClassroomByTeacherId);
router.post('/user/teacher/createClassroom', classroom.createClassroom);
router.post('/user/teacher/enrollStudent', classroomStudent.enrollStudent);


module.exports = router;
