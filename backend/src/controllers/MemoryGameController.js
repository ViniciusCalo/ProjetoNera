// Lida com as requisições relacionadas ao jogo da memória expondo endpoints que o front-end pode chamar para obter imagens do jogo e enviar resultados.

const memoryGameRepo = require('../repositories/MemoryGameRepository');
const express = require('express');
const router = express.Router();

// Obter todas as imagens do jogo da memória por ID do jogo
router.get('/:gameId/images', async (req, res) => {
    try {
        const images = await memoryGameRepo.getImagesByGameId(req.params.gameId);
        res.status(200).json(images);
    } catch (error) {
        console.error('Error fetching memory game images:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

// Enviar a pontuação do jogo da memória
router.post('/result', async (req, res) => {
    const { score, timeSpent, resultDate, studentId, gameId } = req.body;

    try {
        const gameResult = await memoryGameRepo.createGameResult({
            score,
            timeSpent,
            resultDate,
            studentId,
            gameId
        });
        res.status(201).json({ message: 'Game result created successfully', result: gameResult });
    } catch (error) {
        console.error('Error creating game result:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

module.exports = router;
