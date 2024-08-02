const express = require('express');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const achievement = require('./controllers/AchievementsController');
const memoryGame = require('./controllers/MemoryGameController');
const track = require('./controllers/TrackController');
const moduleController = require('./controllers/ModuleController');

const router = express.Router();

router.use("/users", user);
router.use("/classrooms", classroom);
router.use("/api", achievement);
router.use("/memory-game", memoryGame);
router.use("/tracks", track); 
router.use("/modules", moduleController);

module.exports = router;
