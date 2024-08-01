const { sequelize, Sequelize } = require('../../database/db');

const Track = sequelize.define('Track', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
});

module.exports = Track;