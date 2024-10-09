const express = require('express');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const MemoryGame = require('./controllers/GamesController/MemoryGameController')
const achievement = require('./controllers/AchievementsController');
const classroomController = require('./controllers/ClassroomStudentController');
const track = require('./controllers/TrackController');
const moduleController = require('./controllers/ModuleController');

const router = express.Router();

router.use("/users", user);
router.use("/classrooms", classroom);
router.use("/memorygame", MemoryGame)
router.use("/api", achievement);
router.use("/student", classroomController);
router.use("/tracks", track); 
router.use("/modules", moduleController);

module.exports = router;
