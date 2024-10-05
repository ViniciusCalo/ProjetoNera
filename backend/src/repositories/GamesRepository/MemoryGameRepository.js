// vwMemoryGamePairsRepository.js

const VwMemoryGamePairs = require('../../models/CanonicalDataModel/vwMemoryGameModel');

  const findAll = async () => {
    try {
        
        const cards = await VwMemoryGamePairs.VwMemoryGamePairs.findAll();
        const shuffledCards = cards
        .map(card => ({
            ...card.dataValues, sort: Math.random()
        }))
        .sort((a,b) => a.sort - b.sort)
        .map(({sort, ...card}) => card)
        return shuffledCards 
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};  


module.exports = {
    findAll,
};
