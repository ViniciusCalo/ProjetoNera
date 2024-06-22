const teacherModel = require('../models/CanonicalDataModel/TeacherModel');
const bcrypt = require('bcrypt');


const getAll = async () => {
    try {
        const teachers = await teacherModel.Teacher.findAll();
        return teachers;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

const getTeacherById = async (id) => {
    try {
        const teacher = await teacherModel.Teacher.findByPk(id);
        return teacher;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

module.exports = {
    getAll,
    getTeacherById
};