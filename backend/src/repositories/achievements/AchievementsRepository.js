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
        const achievements = await achievement.findOne({
            where: { achievementid },
            attributes: [
                'achievementid',
                'achievementname',
                'achievementdescription',
                'criteria',
                'imageurl',
                'trackid',
            ], // Liste apenas as colunas existentes
        });

        if (!achievements) {
            throw new Error(`Achievement com ID ${achievementid} não encontrado.`);
        }

        return achievements;
    } catch (error) {
        console.error(`Erro ao tentar trazer a conquista com o ID ${achievementid}:`, error);
        throw error;
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
