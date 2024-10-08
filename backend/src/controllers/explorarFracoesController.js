const explorarFracRepo = require('../repositories/achievements/AchievementExplorarFracoes');
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/unlock-achievement', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const { achievementId, studentid } = request.body;

        // Verificar se os parâmetros estão presentes
        if (!achievementId || !studentid) {
            return response.status(400).json({ message: "Parâmetros 'achievementId' e 'studentid' são obrigatórios" });
        }

        const resultAchievement = await explorarFracRepo.unlockAchievementForStudent(studentid, achievementId);

        if (!resultAchievement) {
            return response.status(404).json({ message: "Conquista não desbloqueada" });
        }

        return response.status(200).json(resultAchievement);
    } catch (error) {
        console.error('Error unlocking achievement:', error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});
