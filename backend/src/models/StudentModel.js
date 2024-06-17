const { sequelize, Sequelize} = require('./db');
const user = require('./UserModel');

const Student = sequelize.define('User', {
    studentid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

}, {
    tableName: 'tbstudent',
    timestamps: false
});

const getAllStudents = async () => {
    try {
        const students = await Student.findAll();
        return students;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

const getStudentById = async (id) => {
    try {
        const student = await Student.findByPk(id);
        return student;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

module.exports = Student;