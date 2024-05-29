const express = require('express');

const router = express.Router();
const user = require('./controllers/UserController');

router.get('/', (req, res) => res.status(200).send(" o router esta funcionando"));

router.use('/usuario', user);


module.exports = router;