const { GameImage } = require('../models/GameImageModel');

const getImagesByGameId = async (gameId) => {
    return await GameImage.findAll({ where: { gameId } });
};

module.exports = {
    getImagesByGameId
};
