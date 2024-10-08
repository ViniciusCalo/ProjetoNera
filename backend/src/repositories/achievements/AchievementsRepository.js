const achievement = require('../../models/AchievementModel');

const createAchievement = async ({ achievementname, achievementdescription, criteria, imageurl }) => {
    return await achievement.create({
        achievementname,
        achievementdescription,
        criteria,
        imageurl
    });
};

const getAchievementsByCriteria = async (criteria) => {
    try {
        const achievemetcriteria = await achievement.findAll({where: {criteria}});
        if(!criteria) {
            throw new Error('Critério não encontrado');  
        }
        return achievemetcriteria;  
    } catch (error) {
        console.log(`Erro ao tentar encontrar a conquista baseada no critério ${criteria} `, error);
    }
}


const getAchievementById = async (achievementid) => {
    try {
        const achievements = await achievement.findAll({where: {achievementid}});
        if(!achievements){
            throw new Error('Achievement não encontrado');
        }
        return achievements;
    } catch (error) {
        console.log(`erro ao tentar trazer a conquista com o id ${achievementid}: `, error);
    }
};

const updateAchievement = async (id, { achievementname, achievementdescription, criteria, imageurl }) => {
    const achievement = await achievement.findByPk(id);
    if (!achievement) return null;

    achievement.achievementname = achievementname;
    achievement.achievementdescription = achievementdescription;
    achievement.criteria = criteria;
    achievement.imageurl = imageurl;

    await achievement.save();
    return achievement;
};

module.exports = {
    createAchievement,
    getAchievementById,
    getAchievementsByCriteria,
    updateAchievement,
};
