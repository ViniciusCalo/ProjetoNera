const achievement = require('./AchievementsRepository');
const insertAchv = require('../callProcInsertAchv');
const studentAchievement = require('../../models/StudentAchievementModel');
const gameResultRepo = require('../GameResultRepository');
const modelModule = require('../../models/ModuleModel');


const verifyIfStudentUnlockAchievement = async (studentid, achievementid) => {
    try {
        // Checando se a conquista existe
        const achievementExists = await achievement.getAchievementById(achievementid);

        if (!achievementExists) {
            throw new Error('Conquista não encontrada');
        }

        // Verificando se o aluno já possui a conquista
        const studentHaveTheAchievement = await studentAchievement.findOne({
            where: {
                studentid: studentid,
                achievementid: achievementid
            }
        });

        if (studentHaveTheAchievement) {
            throw new Error('Aluno já possui esta conquista');
        }

        // Rodar a procedure para desbloquear a conquista
        await unlockAchievementForStudent(studentid, achievementid);

        console.log(`Conquista: ${achievementid} desbloqueada com sucesso`);
    } catch (error) {
        console.error('Error verifying if student unlock achievement:', error);
        throw error;
    }
};

const unlockAchievementForStudent = async (studentid, achievementid) => {
    try {
        // Rodar a procedure para desbloquear a conquista
        const insertAchievement = await insertAchv.callProcInsertNewAchievement(studentid, achievementid);

        if (!insertAchievement) {
            throw new Error('Erro ao executar a procedure');
        }
    } catch (error) {
        console.error('Error unlocking achievement for student:', error);
        throw error;
    }
};

module.exports = {
    verifyIfStudentUnlockAchievement,
    unlockAchievementForStudent
};
