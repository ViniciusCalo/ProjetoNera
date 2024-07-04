const express = require('express');
const passport = require('passport');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const router = express.Router();
const authToken = require('./controllers/AuthenticationController');

router.use(user.all);
router.use(classroom.all);
router.use(authToken.verifyToken);


module.exports = router;
