const { DataTypes } = require('sequelize');
const { sequelize, Sequelize } = require('../../database/db');

// Modelo da VIEW vw_memorygame_pairs
const VwMemoryGamePairs = sequelize.define('VwMemoryGamePairs', {
  idmatch: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  gamename: {
    type: DataTypes.STRING
  },
  image1_url: {
    type: DataTypes.STRING
  },
  image2_url: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'vwmemorygame',  // Nome da VIEW
  timestamps: false                  // Como a VIEW é apenas leitura, não precisamos de timestamps
});

module.exports = {VwMemoryGamePairs};