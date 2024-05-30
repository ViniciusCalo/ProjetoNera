const express = require('express');
const userController = require('../src/controllers/UserController');

const router = express.Router();

router.get('/usuario', userController.getAll);
router.post('/usuario/cadastrar', userController.createUser)
module.exports = router;
