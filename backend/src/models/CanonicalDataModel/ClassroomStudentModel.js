const { sequelize, Sequelize } = require('../../database/db');

const ClassroomStudent = sequelize.define('ClassroomStudent', {
    classroomid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Classrooms',
            key: 'classroomid'
        }
    },
    studentid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'userid'
        }
    }
}, {
    tableName: 'tbclassroomstudent',
    timestamps: false
});

module.exports = ClassroomStudent;
