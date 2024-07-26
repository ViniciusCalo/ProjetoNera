// define a estrutura da tabela tbgameresult no banco de dados. Ele utiliza o Sequelize para mapear a tabela e os campos.
const { sequelize, Sequelize } = require('../../database/db');

const GameResult = sequelize.define('GameResult', {
    gameResultId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    timeSpent: {
        type: Sequelize.TIME,
        allowNull: false
    },
    resultDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    studentId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gameId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tbgameresult',
    timestamps: false
});

module.exports = { GameResult };



