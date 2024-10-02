const { sequelize, Sequelize } = require('../database/db');

const studentAchievement = sequelize.define('studentAchievement', {
    studentid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: 'student',
            key: 'studentid'
        }
    },
    achievementid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: 'achievement',
            key: 'achievementid'
        }
    },
        timestamps: false,
        tableName: 'tbstudentachievement',
});

module.exports = studentAchievement;