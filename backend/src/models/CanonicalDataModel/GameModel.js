const { sequelize, Sequelize } = require('../../database/db');

const Game = sequelize.define('Game', {
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
            model: 'Module', //referenciando o moduleid como FK na tbgame
            key:'moduleid' 
        }
    }


});