const achievementRepo = require('../repositories/achievements/AchievementsRepository');
const express = require('express');
const router = express.Router();

// // Criar uma nova conquista
// router.post('/achievement/create', async (req, res) => {
//     const { achievementname, achievementdescription, criteria, imageurl } = req.body;

//     try {
//         const newAchievement = await achievementRepo.createAchievement({
//             achievementname,
//             achievementdescription,
//             criteria,
//             imageurl
//         });
//         res.status(201).json({ message: 'Achievement created successfully', achievement: newAchievement });
//     } catch (error) {
//         console.error('Error creating achievement:', error);
//         res.status(500).json({ message: error.message || 'Internal server error' });
//     }
// });

// Obter todas as conquistas
router.get('/achievement', async (req, res) => {
    try {
        const achievements = await achievementRepo.getAllAchievements();
        res.status(200).json(achievements);
    } catch (error) {
        console.error('Error fetching achievements:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

// Obter uma conquista por ID
router.get('/achievement/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const achievement = await achievementRepo.getAchievementById(id);
        if (!achievement) {
            return res.status(404).json({ message: 'Achievement not found' });
        }
        res.status(200).json(achievement);
    } catch (error) {
        console.error('Error fetching achievement:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

// // Atualizar uma conquista por ID
// router.put('/achievement/:id', async (req, res) => {
//     const { id } = req.params;
//     const { achievementname, achievementdescription, criteria, imageurl } = req.body;

//     try {
//         const updatedAchievement = await achievementRepo.updateAchievement(id, {
//             achievementname,
//             achievementdescription,
//             criteria,
//             imageurl
//         });
//         if (!updatedAchievement) {
//             return res.status(404).json({ message: 'Achievement not found' });
//         }
//         res.status(200).json({ message: 'Achievement updated successfully', achievement: updatedAchievement });
//     } catch (error) {
//         console.error('Error updating achievement:', error);
//         res.status(500).json({ message: error.message || 'Internal server error' });
//     }
// });


module.exports = router;