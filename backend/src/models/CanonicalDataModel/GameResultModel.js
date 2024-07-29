// define a estrutura da tabela tbgameresult no banco de dados. Ele utiliza o Sequelize para mapear a tabela e os campos.
const { sequelize, Sequelize } = require('../../database/db');

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
        allowNull: false
    },
    gameid: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tbgameresult',
    timestamps: false
});

module.exports = { GameResult };
