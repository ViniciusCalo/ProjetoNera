const { sequelize, Sequelize} = require('../../database/db');
const user = require('../CanonicalDataModel/UserModel');

const Student = sequelize.define('User', {
    studentid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'User', //referenciando o userId como FK na tabela student
            key: 'userid'
        }
    }
}, {
    tableName: 'tbstudent',
    timestamps: false
});

module.exports = Student;