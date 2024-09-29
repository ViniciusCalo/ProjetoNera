const { sequelize, Sequelize } = require('../database/db');

const track = sequelize.define('track', {
    trackid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    trackname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    trackdescription: {
        type: Sequelize.TEXT,
        allowNull: true
    },
}, {
    timestamps: false,
    tableName: 'tbtrack'
});

module.exports = track;
