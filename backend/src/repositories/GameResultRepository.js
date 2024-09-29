const gameResult = require('../models/GameResultModel');

const createGameResult = async ({ score, timeSpent, resultDate, studentId, gameId }) => {
    return await gameResult.create({
        score,
        timeSpent,
        resultDate,
        studentId,
        gameId
    });
};

module.exports = {
    createGameResult
};
