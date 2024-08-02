const moduleRepo = require('../repositories/ModuleRepository');
const express = require('express');
const router = express.Router();

// Obter todos os módulos
router.get('/', async (req, res) => {
    try {
        const modules = await moduleRepo.getAllModules();
        res.status(200).json(modules);
    } catch (error) {
        console.error('Error fetching modules:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

// Obter um módulo por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const module = await moduleRepo.getModuleById(id);
        if (!module) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.status(200).json(module);
    } catch (error) {
        console.error('Error fetching module:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

// Obter todos os módulos de uma trilha por ID da trilha
router.get('/track/:trackid', async (req, res) => {
    const { trackid } = req.params;

    try {
        const modules = await moduleRepo.getModulesByTrackId(trackid);
        if (!modules || modules.length === 0) {
            return res.status(404).json({ message: 'No modules found for this track' });
        }
        res.status(200).json(modules);
    } catch (error) {
        console.error('Error fetching modules by track:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

module.exports = router;
