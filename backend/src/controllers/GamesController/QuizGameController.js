const QuizRepository = require('../../repositories/GamesRepository/QuizGameRepository');

const QuizController = {
    async getQuizQuestions(req, res) {
        const gameId = req.params.gameId;

        try {
            const questions = await QuizRepository.getQuizQuestionsWithOptions(gameId);
            res.status(200).json(questions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = QuizController;
