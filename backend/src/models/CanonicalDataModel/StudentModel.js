const { sequelize, Sequelize } = require('../../database/db');

const Student = sequelize.define('Student', {
    studentid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'User', //referenciando o userId como FK na tbstudent
            key: 'userid'
        },
        unique: true
    }
}, {
    tableName: 'tbstudent',
    timestamps: false
});

module.exports = {Student};