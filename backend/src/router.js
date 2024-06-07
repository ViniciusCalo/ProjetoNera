const express = require('express');
const userController = require('../src/controllers/UserController');
const classroomController = require('../src/controllers/ClassroomController');
const classroomStudentController = require('../src/controllers/ClassroomStudentController');
const tokenController = require('../src/controllers/ClassroomTokenController');

const router = express.Router();

router.get('/user', userController.getAll);
router.get('/user/:id', userController.getUserById);
router.post('/user/register', userController.createUser)
router.post('/user/login', userController.loginUser);

router.get('/user/teacher/getAllClassrooms', classroomController.getAllClassroomHandler);
router.post('/user/teacher/createClassroom', classroomController.createClassroomHandler);
router.post('/user/teacher/enrollStudent', classroomStudentController.enrollStudent);

router.post('/generate', tokenController.generateClassroomToken);
router.post('/join', tokenController.joinClassroom)


module.exports = router;
