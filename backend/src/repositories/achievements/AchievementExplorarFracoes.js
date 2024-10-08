const achievement = require('./AchievementsRepository');
const insertAchv = require('../callProcInsertAchv');
const studentAchievement = require('../../models/StudentAchievementModel');
const gameResultRepo = require('../GameResultRepository');
const modelModule = require('../../models/ModuleModel');

// Verificar se o critério para desbloquear a conquista foi atingido
const checkAchievementCriteria = async ({ trackid, criteria, achievementid, studentid }) => {
    try {
        // Chamando método de verificação da pontuação de cada jogo
        const gameResult = await gameResultRepo.checkGameResult();

        if (!gameResult) {
            throw new Error('Usuário não concluiu todos os jogos necessários');
        }

        // Verificar se todos os módulos da trilha foram concluídos
        const modules = await modelModule.findAll({ where: { trackid: trackid } });

        for (const module of modules) {
            const isModuleComplete = await checkIfModuleIsComplete(module.moduleid);

            if (!isModuleComplete) {
                throw new Error('Módulo não está completo');
            }
        }

        // Se todos os critérios estiverem satisfeitos, verifica se o aluno pode desbloquear a conquista
        await verifyIfStudentUnlockAchievement(studentid, achievementid);

        // Pesquisando a conquista pelo critério
        const getAchievement = await achievement.findOne({
            where: {
                criteria: 'Completar todos os módulos de frações.'
            }
        });

        if (!getAchievement) {
            throw new Error('Critério não existe');
        }
    } catch (error) {
        console.error('Error checking achievement criteria:', error);
        throw error;
    }
};

// Função para verificar se um módulo está completo
const checkIfModuleIsComplete = async (moduleid) => {
    // Buscando jogos relacionados ao módulo
    const games = await gameResultRepo.findAll({ where: { moduleid: moduleid } });

    // Verificando se todos os jogos foram concluídos
    for (const game of games) {
        if (!game.isComplete) { // Supondo que cada jogo tenha um campo isComplete ou similar
            return false;
        }
    }
    return true;
};

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
    checkAchievementCriteria,
    verifyIfStudentUnlockAchievement
};
