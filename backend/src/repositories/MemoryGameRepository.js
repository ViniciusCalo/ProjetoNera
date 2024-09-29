// lida com a lógica de acesso a dados específica para o jogo da memória. Ele se comunica com os modelos para realizar operações no banco de dados.
const gameImage = require('../models/GameImageModel');
const gameResult = require('../models/GameResultModel');

const getImagesByGameId = async (gameid) => {
    return await gameImage.findAll({ where: { gameid } });
};

const createGameResult = async ({ score, timeSpent, resultDate, studentid, gameid }) => {
    return await gameResult.create({
        score,
        timespent: timeSpent,
        resultdate: resultDate,
        studentid,
        gameid
    });
};

const getResultsByStudentId = async (studentid) => {
    return await gameResult.findAll({ where: { studentid } });
};

module.exports = {
    getImagesByGameId,
    createGameResult,
    getResultsByStudentId
};
