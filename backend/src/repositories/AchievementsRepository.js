const { Achievement } = require('../models/CanonicalDataModel/AchievementModel');

const createAchievement = async ({ achievementname, achievementdescription, criteria, imageurl }) => {
    return await Achievement.create({
        achievementname,
        achievementdescription,
        criteria,
        imageurl
    });
};

const getAllAchievements = async () => {
    return await Achievement.findAll();
};

const getAchievementById = async (id) => {
    return await Achievement.findByPk(id);
};

const updateAchievement = async (id, { achievementname, achievementdescription, criteria, imageurl }) => {
    const achievement = await Achievement.findByPk(id);
    if (!achievement) return null;

    achievement.achievementname = achievementname;
    achievement.achievementdescription = achievementdescription;
    achievement.criteria = criteria;
    achievement.imageurl = imageurl;

    await achievement.save();
    return achievement;
};

const deleteAchievement = async (id) => {
    const achievement = await Achievement.findByPk(id);
    if (!achievement) return null;

    await achievement.destroy();
    return true;
};

module.exports = {
    createAchievement,
    getAllAchievements,
    getAchievementById,
    updateAchievement,
    deleteAchievement
};
