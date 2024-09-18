const { sequelize, Sequelize } = require('../../database/db');
const Module = require('./ModuleModel');

const Track = sequelize.define('tbtrack', {
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

Track.hasMany(Module, { foreignKey: 'trackid' });
Module.belongsTo(Track, { foreignKey: 'trackid' });

module.exports = Track;
