const achievement = require('../../models/AchievementModel');
const insertAchv = require('../callProcInsertAchv');
const studentAchievement = require('../../models/StudentAchievementModel');
const classStudentModule = require('../../models/ClassroomStudentModel');
const classroomModule =  require('../../models/ClassroomModel')
const studentModel = require('../../models/StudentModel');
require('dotenv').config();

const verifyRequisitsToHaveAchievement = async (studentid, moduleid) => {
    try {

        const moduleOfClass = await classroomModule.findOne({where: {moduleid: 1}});
        const studentOnModule = await classStudentModule.findOne({where: studentid, classroomid: moduleOfClass});

        if(!studentOnModule) {
            throw new Error( 'Student não iniciou o modulo de trilha');
        };

        return studentOnModule;

    } catch (error) {
        throw new Error('Erro ao buscar módulos do aluno: '+ error.message);
    }
};

const verifyIfStudentUnlockAchievement = async (studentid, achievementid) => {
    try {
        // Verifica se o aluno já possui a conquista
        const studentHaveTheAchievement = await studentAchievement.findOne({
            where: {
                studentid: studentid,
                achievementid: achievementid
            }
        });

        if(studentHaveTheAchievement === true) {
            throw new Error('Aluno ja possui a conquista');
        }

        // Retorna true se o aluno já possui a conquista, senão false
        return !!studentHaveTheAchievement;
        
    } catch (error) {
        console.error('Error verifying if student unlock achievement:', error);
        throw error;
    }
};

const unlockAchievementForStudent = async (studentid, achievementid) => {
    try {
        // Verifica se o aluno já possui a conquista
        const alreadyHasAchievement = await verifyIfStudentUnlockAchievement(studentid, achievementid);

        if (alreadyHasAchievement) {
            throw new Error('Aluno já possui esta conquista');
        }

        // Obtenha os detalhes da conquista antes de desbloqueá-la
        const achievementExists = await achievement.findOne({where: {achievementid}});
        console.log(achievementExists);
        if (!achievementExists) {
            throw new Error('Conquista não encontrada');
        }

        // Execute a procedure para desbloquear a conquista
        const insertAchievement = await insertAchv.callProcInsertNewAchievement(studentid, achievementid);

        if (!insertAchievement) {
            throw new Error('Erro ao executar a procedure');
        }

        // Defina os detalhes da conquista com base nos dados obtidos
        const achievementDetails = {
            achievementid: achievementid,
            achievementname: achievementExists.achievementname,
            achievementdescription: achievementExists.description,
            imageurl: achievementExists.imageurl
        };

        console.log(`Conquista: ${achievementid} desbloqueada com sucesso`);
        return { achievementDetails };
    } catch (error) {
        console.error('Error unlocking achievement for student:', error);
        throw error;
    }
};

module.exports = {
    unlockAchievementForStudent
};
