// lida com a lógica de acesso a dados específica para o jogo da memória. Ele se comunica com os modelos para realizar operações no banco de dados.
const { GameImage } = require('../models/CanonicalDataModel/GameImageModel');
const { GameResult } = require('../models/CanonicalDataModel/GameResultModel');

const getImagesByGameId = async (gameid) => {
    return await GameImage.findAll({ where: { gameid } });
};

const createGameResult = async ({ score, timeSpent, resultDate, studentid, gameid }) => {
    return await GameResult.create({
        score,
        timespent: timeSpent,
        resultdate: resultDate,
        studentid,
        gameid
    });
};

const getResultsByStudentId = async (studentid) => {
    return await GameResult.findAll({ where: { studentid } });
};

module.exports = {
    getImagesByGameId,
    createGameResult,
    getResultsByStudentId
};
