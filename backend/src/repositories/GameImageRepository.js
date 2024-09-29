const gameImage = require('../models/GameImageModel');

const getImagesByGameId = async (gameId) => {
    return await gameImage.findAll({ where: { gameId } });
};

module.exports = {
    getImagesByGameId
};
