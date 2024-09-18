const { sequelize, Sequelize } = require('../database/db');

const ClassroomStudent = sequelize.define('ClassroomStudent', {
    classroomid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: 'Classrooms',
            key: 'classroomid'
        }
    },
    studentid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: 'Student',
            key: 'studentid'
        }
    }
}, {
    tableName: 'tbclassroomstudent',
    timestamps: false
});

module.exports = {ClassroomStudent};
