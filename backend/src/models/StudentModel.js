const { sequelize, Sequelize } = require('../database/db');

const student = sequelize.define('student', {
    studentid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'user', //referenciando o userId como FK na tbstudent
            key: 'userid'
        },
        unique: true
    }
}, {
    tableName: 'tbstudent',
    timestamps: false
});

module.exports = student;