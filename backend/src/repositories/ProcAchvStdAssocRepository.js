const callProc = require('./callProcInsertAchv');

const ProcToImplementAchvStdAssocRepository = {
    async insertAchievementAndStudent(studentid, achievementid) {
        try {
            const result = await callProc.callProcInsertNewAchievement(studentid, achievementid);
            console.log('procedure executada com sucesso');
            return result;
        } catch(error) {
            console.log('erro ao chamar a procedure no repositório:', error);
            throw error;
        }
    }
}

module.exports = ProcToImplementAchvStdAssocRepository;