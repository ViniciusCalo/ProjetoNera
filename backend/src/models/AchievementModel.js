const { sequelize, Sequelize } = require('../database/db');

const achievement = sequelize.define('achievement', {
    achievementid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    achievementname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    achievementdescription: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    criteria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageurl: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {
    tableName: 'tbachievement',
    timestamps: false
});

module.exports = achievement;
