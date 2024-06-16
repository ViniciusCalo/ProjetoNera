const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('rykahwui', 'rykahwui', 'j_IehwTRhEw4ehQOJ_BAvbabJT8vVa23', {
  dialect: 'postgres',
  host: 'kesavan.db.elephantsql.com'
});

module.exports = {
  sequelize,
  Sequelize,
};