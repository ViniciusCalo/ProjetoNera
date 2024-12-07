const { sequelize, Sequelize } = require('../database/db');

const classroomStudent = sequelize.define('classroomStudent', {
    classroomid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: 'classroom',
            key: 'classroomid'
        }
    },
    studentid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: 'student',
            key: 'studentid'
        }
    }
}, {
    tableName: 'tbclassroomstudent',
    timestamps: false
});

module.exports = classroomStudent;
