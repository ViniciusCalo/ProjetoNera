// vwMemoryGamePairsRepository.js

const vwQuizGame = require('../../models/CanonicalDataModel/vwQuizGameModel');

  const findAll = async () => {
    try {
        const questions = await vwQuizGame.vwQuizGame.findAll()
        const questionsList = questions
        .map(question => ({
            ...question.dataValues
        }))
        console.log(questionsList)
        return questionsList 
    } catch (error) {
        console.error('Error Quiz Game:', error);
        throw error;
    }
};  

module.exports = {
    findAll,
};
