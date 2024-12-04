const { DataTypes } = require('sequelize');
const { sequelize, Sequelize } = require('../../database/db');

const vwQuizGame = sequelize.define('vwQuizGame', {
    questionid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    question: {
        type: DataTypes.STRING,
    },
    option_1: {
        type: DataTypes.STRING
    },
    option_2: {
        type: DataTypes.STRING
    },
    option_3: {
        type: DataTypes.STRING
    },
    option_4: {
        type: DataTypes.STRING
    },
    is_correct: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    gamename: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'vwquizgame',
    timestamps: false
});

module.exports = { vwQuizGame };