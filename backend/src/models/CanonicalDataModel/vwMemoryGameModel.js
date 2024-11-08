const { DataTypes } = require('sequelize');
const { sequelize, Sequelize } = require('../../database/db');

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
  tableName: 'vwmemorygame',
  timestamps: false              
});

module.exports = {VwMemoryGamePairs};