const { sequelize, Sequelize } = require('../../database/db');

const Module = sequelize.define('tbmodule', {
    moduleid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modulename: {
        type: Sequelize.STRING,
        allowNull: false
    },
    moduledescription: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    trackid: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tbmodule'
});

module.exports = Module;
