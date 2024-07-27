// define a estrutura da tabela tbgameimages no banco de dados. Ele utiliza o Sequelize para mapear a tabela e os campos.

const { sequelize, Sequelize } = require('../../database/db');

const GameImage = sequelize.define('GameImage', {
    imagesid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imageurl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagedescription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gameid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'TBGAME',
            key: 'gameid'
        }
    }
}, {
    tableName: 'tbgameimages',
    timestamps: false
});

module.exports = { GameImage };
