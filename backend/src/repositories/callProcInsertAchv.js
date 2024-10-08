const callProcModel = require('../models/CallProcedureModel');
class CallProcedureRepo extends callProcModel {

    static async callProcInsertNewAchievement(studentid, achievementid) {
        try {
            const queryResult = await sequelize.query('CALL inserir_conquista_desbloqueada(:studentid, :achievementid)', {
                replacements: { studentid, achievementid },
                type: sequelize.QueryTypes.RAW
            });
            return queryResult;
        } catch (error) {
            console.error('Erro ao chamar procedure: ', error);
            throw error;
        }
    }
};

module.exports = CallProcedureRepo;