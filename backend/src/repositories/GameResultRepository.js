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

const checkGameResult = async ({ gameresultid, studentid, gameid, score }) => {
    try {
        // Verificar se existe um resultado específico de jogo com o gameresultid fornecido
        const gameScore = await gameResult.findOne({ 
            where: {
                gameresultid: gameresultid,
                studentid: studentid,
                gameid: gameid
            }
        });

        // Verificar se o resultado foi encontrado
        if (!gameScore) {
            throw new Error('Resultado do jogo não encontrado.');
        }
        // Se todas as verificações passarem, retornar true
        return gameScore.score;

    } catch (error) {
        throw new Error('Erro ao verificar pontuação: ' + error.message);
    }
};

module.exports = {
    createGameResult,
    checkGameResult
};
