const { sequelize, Sequelize } = require('./db');
const Teacher = require('../models/TeacherModel'); 
const express = require('express');
const generateHash = require('../util/hash');

const Classroom = sequelize.define('Classroom', {
    classroomid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    classroomname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    classroomdescription: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    classroomcreation: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    teacherid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Teacher', // Ajuste para corresponder ao nome da tabela de usuários
            key: 'teacherid'
        }
    },
    trackid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Tracks', // Ajuste para corresponder ao nome da tabela de trilhas
            key: 'trackid'
        }
    },
    moduleid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Modules', // Ajuste para corresponder ao nome da tabela de módulos
            key: 'moduleid'
        }
    },
    tokenclass: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tbclassroom',
    timestamps: false
});

const getAllClassrooms = async () => {
    try {
        const classrooms = await Classroom.findAll();
        return classrooms;
    } catch (error) {
        console.error('Erro ao tentar trazer as salas: ', error);
        throw error;
    }
};

const getAllClassroomByTeacherId = async (teacherid) => {
    try {
        const classrooms = await Classroom.findAll({ where: { teacherid } });
        return classrooms;
    } catch (error) {
        console.error(`Erro ao tentar trazer as salas do professor ${teacherid}: `, error);
        throw error;
    }
};

const createClassroom = async ({ classroomid, classroomname, classroomdescription, teacherid, trackid, moduleid, tokenclass }) => {
    try {
        const teacherExists = await Teacher.getTeacherById(teacherid);
        if (!teacherExists) {
            throw new Error('Teacher does not exist');
        }
        const classroomExists = await Classroom.findOne({ where: { classroomname } });

        if (classroomExists) {
            throw new Error('Classroom already exists');
        }

        const newClassroom = await Classroom.create({
            classroomname,
            classroomdescription,
            teacherid,
            trackid,
            moduleid,
            tokenclass
        });
        return newClassroom;
    } catch (error) {
        console.error('Erro ao criar Sala! ', error);
    }
};

module.exports = {
    getAllClassrooms,
    getAllClassroomByTeacherId,
    createClassroom
};
