const { sequelize, Sequelize } = require('../database/db');

const teacher = sequelize.define('teacher', {
    teacherid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'user', //referenciando o userId como FK na tbteacher
            key: 'userid'
        },
        unique: true
    },
    teachercpf: {
        type: Sequelize.STRING,
        unique: true
    }
}, {
    tableName: 'tbteacher',
    timestamps: false
});

module.exports = teacher;