const { sequelize, Sequelize } = require('../database/db');

const procedureInsertNewAchievement = sequelize.define('insertNewAchievement',{
    idstudent: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idachievement: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = procedureInsertNewAchievement;