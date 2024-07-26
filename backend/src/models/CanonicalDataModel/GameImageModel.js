// define a estrutura da tabela tbgameimages no banco de dados. Ele utiliza o Sequelize para mapear a tabela e os campos.

const { sequelize, Sequelize } = require('../../database/db');

const GameImage = sequelize.define('GameImage', {
    imageId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageDescription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gameId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'TBGAME',
            key: 'gameId'
        }
    }
}, {
    tableName: 'tbgameimages',
    timestamps: false
});

module.exports = { GameImage };
