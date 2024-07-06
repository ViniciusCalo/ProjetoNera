const express = require('express');
const passport = require('passport');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const { authenticateJWT, authorizeRole } = require('./middlewares/autorization');
const router = express.Router();
const authToken = require('./controllers/AuthenticationController');

//router.use(authenticateJWT);
router.use(user.all);
//router.use(authorizeRole('professor'),classroom.all);
router.use(authToken.verifyToken);


module.exports = router;
