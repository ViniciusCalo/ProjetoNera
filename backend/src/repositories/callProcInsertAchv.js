const CallProcedureModel = require('../models/CallProcedureModel');

class CallProcedureRepo {
    static async callProcInsertNewAchievement(studentid, achievementid) {
        return await CallProcedureModel.callProcInsertNewAchievement(studentid, achievementid);
    }
}

module.exports = CallProcedureRepo;
