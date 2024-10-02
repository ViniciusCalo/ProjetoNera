const callProcModel = require('../models/CallProcedureModel');

class CallProcedureRepo extends callProcModel {

    static async callProcInsertNewAchievement(idstudent, idachievement){
        try {
            const queryResult = await sequelize.query('CALL inserir_conquista_desbloqueada(:idstudent, :idachievement)', {
                replacements: { idstudent, idachievement },
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