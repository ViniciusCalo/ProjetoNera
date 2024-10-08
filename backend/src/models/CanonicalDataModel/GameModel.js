const { sequelize, DataTypes } = require('../../database/db'); // Importação corrigida

const Game = sequelize.define('Game', {
    gameid: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }, 
    gamename: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gamedescription: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    moduleid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Modules', 
            key: 'moduleid'
        }
    }
}, {
    tableName: 'tbgame', 
    timestamps: false 
});

module.exports = { Game };
