// vwMemoryGamePairsController.js
const express = require('express');
const passport = require('passport');
const router = express.Router();
const VwMemoryGamePairsRepository = require('../../repositories/GamesRepository/MemoryGameRepository');

// Método para obter todos os pares de imagens
router.get('/', async (request, response) => {
    try {
        const pairs = await VwMemoryGamePairsRepository.findAll();
        return response.status(200).json(pairs);
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }

}
)
/* Método para buscar pares por nome do jogo
async getPairsByGameName(req, res) {
      const { gamename } = req.params;
      try {
          const pairs = await VwMemoryGamePairsRepository.findByGameName(gamename);
          return res.status(200).json(pairs);
      } catch (error) {
          return res.status(500).json({ message: error.message });
      }
 }*/

module.exports = router;
