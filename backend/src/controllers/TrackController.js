const trackRepo = require('../repositories/trackRepository');
const express = require('express');
const router = express.Router();

// Obter todas as trilhas
router.get('/', async (req, res) => {
    try {
        const tracks = await trackRepo.getAllTracks();
        res.status(200).json(tracks);
    } catch (error) {
        console.error('Error fetching tracks:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

// Obter uma trilha por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const track = await trackRepo.getTrackById(id);
        if (!track) {
            return res.status(404).json({ message: 'Track not found' });
        }
        res.status(200).json(track);
    } catch (error) {
        console.error('Error fetching track:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

module.exports = router;
