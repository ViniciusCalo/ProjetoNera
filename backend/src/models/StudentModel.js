const { sequelize, Sequelize} = require('./db');

const Student = sequelize.define('User', {
    studentid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    userid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users', // Ajuste para corresponder ao nome da tabela de usuários
            key: 'userid'
        }
    }

}, {
    tableName: 'tbstudent',
    timestamps: false
});



module.exports = Student;