const express = require('express');
const userController = require('../src/controllers/UserController');

const router = express.Router();

router.get('/user', userController.getAll);
router.get('/user/:id', userController.getUserById);
router.post('/user/register', userController.createUser)
router.post('/user/login', userController.loginUser);

module.exports = router;
