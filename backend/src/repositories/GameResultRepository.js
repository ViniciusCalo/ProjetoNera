const { GameResult } = require('../models/CanonicalDataModel/GameResultModel');

const createGameResult = async ({ score, timeSpent, resultDate, studentId, gameId }) => {
    return await GameResult.create({
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
