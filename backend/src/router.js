// importa e usa os controladores responsáveis por cada conjunto de funcionalidades, 
// organizando todas as rotas da aplicação em um único lugar.

const express = require('express');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const achievement = require('./controllers/AchievementsController');
const classroomController = require('./controllers/ClassroomStudentController');
const memoryGame = require('./controllers/MemoryGameController');

const router = express.Router();

router.use("/users", user);
router.use("/classrooms", classroom);
router.use("/api", achievement);
router.use("/memory-game", memoryGame);
router.use("/student", classroomController);



module.exports = router;
