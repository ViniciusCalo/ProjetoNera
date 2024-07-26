// lida com a lógica de acesso a dados específica para o jogo da memória. Ele se comunica com os modelos para realizar operações no banco de dados.


const { GameImage } = require('../models/CanonicalDataModel/GameImageModel');
const { GameResult } = require('../models/CanonicalDataModel/GameResultModel');

const getImagesByGameId = async (gameId) => {
    return await GameImage.findAll({ where: { gameId } });
};

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
    getImagesByGameId,
    createGameResult
};
