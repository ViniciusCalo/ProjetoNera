const { sequelize, Sequelize } = require('../database/db');

const game = sequelize.define('game', {
    gameid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    gamename: {
        type: Sequelize.STRING,
        allowNull: true
    },
    gamedescription: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    moduleid:{
        type: Sequelize.INTEGER,
        references: {
            model: 'module', //referenciando o moduleid como FK na tbgame
            key:'moduleid' 
        }
    }


});

module.exports = game;