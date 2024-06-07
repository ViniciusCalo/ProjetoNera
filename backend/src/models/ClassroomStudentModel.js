const { sequelize, Sequelize } = require('./db');

const ClassroomStudent = sequelize.define('ClassroomStudent', {
    classroomid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Classrooms', // Ajuste para corresponder ao nome da tabela de salas
            key: 'classroomid'
        }
    },
    studentid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users', // Ajuste para corresponder ao nome da tabela de usuários
            key: 'userid'
        }
    }
}, {
    tableName: 'tbclassroomstudent',
    timestamps: false
});

module.exports = ClassroomStudent;
