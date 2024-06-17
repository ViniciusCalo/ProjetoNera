const { sequelize, Sequelize } = require('./db');
const user = require('../models/UserModel');

const Teacher = sequelize.define('Teacher', {
    teacherid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    teachercpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'tbteacher',
    timestamps: false
});

const getAll = async () => {
    try {
        const teachers = await Teacher.findAll();
        return teachers;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

const getTeacherById = async (id) => {
    try {
        const user = await Teacher.findByPk(id);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

module.exports = {
    getAll,
    getTeacherById
};
