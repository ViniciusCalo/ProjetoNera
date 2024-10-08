const { QuizQuestion, QuizOption } = require('../../models/CanonicalDataModel/QuizGameModel');

const QuizRepository = {
    async getQuizQuestionsWithOptions(gameId) {
        try {
            const questions = await QuizQuestion.findAll({
                where: { fkgameid: gameId },
                include: [{ model: QuizOption, as: 'options' }]  // Use o alias 'options'
            });
            return questions;
        } catch (error) {
            throw new Error('Erro ao buscar perguntas do quiz: ' + error.message);
        }
    }
};

module.exports = QuizRepository;
