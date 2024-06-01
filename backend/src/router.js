const express = require('express');
const userController = require('../src/controllers/UserController');

const router = express.Router();

router.get('/usuario', userController.getAll);
router.get('/usuario/:id', userController.getUserById);
router.post('/usuario/cadastrar', userController.createUser)
router.get('/usuario/login', userController.loginUser);

module.exports = router;
