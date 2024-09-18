// define a estrutura da tabela tbgameresult no banco de dados. Ele utiliza o Sequelize para mapear a tabela e os campos.
const { sequelize, Sequelize } = require('../database/db');

const GameResult = sequelize.define('GameResult', {
    gameresultid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    timespent: {
        type: Sequelize.TIME,
        allowNull: false
    },
    resultdate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    studentid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Student', //referenciando o studentid como FK na tbgameresult
            key: 'studentid'
        },
        unique: true
    },
    gameid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Game', //referenciando o gameid como FK na tbgameresult
            key: 'gameid'
        },
        unique: true
    }
}, {
    tableName: 'tbgameresult',
    timestamps: false
});

module.exports = { GameResult };
