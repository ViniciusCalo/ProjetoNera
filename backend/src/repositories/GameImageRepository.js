const { GameImage } = require('../models/CanonicalDataModel/GameImageModel');

const getImagesByGameId = async (gameId) => {
    return await GameImage.findAll({ where: { gameId } });
};

module.exports = {
    getImagesByGameId
};
