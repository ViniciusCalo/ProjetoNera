const teacherModel = require('../models/CanonicalDataModel/TeacherModel'); 
const classroomModel = require('../models/CanonicalDataModel/ClassroomModel');
const express = require('express');


const getAllClassrooms = async () => {
    try {
        const classrooms = await classroomModel.Classroom.findAll();
        return classrooms;
    } catch (error) {
        console.error('Erro ao tentar trazer as salas: ', error);
        throw error;
    }
};

const getAllClassroomByTeacherId = async (teacherid) => {
    try {
        const classrooms = await classroomModel.Classroom.findAll({ where: { teacherid } });
        return classrooms;
    } catch (error) {
        console.error(`Erro ao tentar trazer as salas do professor ${teacherid}: `, error);
        throw error;
    }
};

const createClassroom = async ({ classroomid, classroomname, classroomdescription, teacherid, trackid, moduleid, tokenclass }) => {
    try {
        const teacherExists = await teacherModel.Teacher.getTeacherById(teacherid);
        if (!teacherExists) {
            throw new Error('Teacher does not exist');
        }
        const classroomExists = await classroomModel.Classroom.findOne({ where: { classroomname } });

        if (classroomExists) {
            throw new Error('Classroom already exists');
        }

        const newClassroom = await classroomModel.Classroom.create({
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
