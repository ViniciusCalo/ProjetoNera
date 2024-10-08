const express = require('express');
const user = require('./controllers/UserController');
const classroom = require('./controllers/ClassroomController');
const MemoryGame = require('./controllers/GamesController/MemoryGameController');
const QuizController = require('./controllers/GamesController/QuizGameController'); // Certifique-se de que o caminho está correto

const router = express.Router();

// Outras rotas...
router.use("/users", user);
router.use("/classrooms", classroom);
router.use("/memorygame", MemoryGame);

// Rota do quizgame
router.get("/quizgame/:gameId/questions", QuizController.getQuizQuestions);

module.exports = router;
