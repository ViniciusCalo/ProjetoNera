const teacherRepo = require('../repositories/TeacherRepository');
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
        const teacherExists = await teacherRepo.getTeacherById(teacherid);
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

const editClassroom = async ({ classroomid, classroomname, classroomdescription, teacherid, trackid, moduleid, tokenclass }) => {
    try {
        const teacherExists = await teacherRepo.getTeacherById(teacherid);
        if (!teacherExists) {
            throw new Error('Teacher does not exist');
        }
        const classroomExists = await classroomModel.Classroom.findOne({ where: { classroomid } });
        if (!classroomExists) {
            throw new Error('Classroom do not exists, unable to edit');
        }
        const updatedClassroom = await classroomModel.Classroom.update({
            classroomdescription,
            trackid,
            moduleid,
            tokenclass
        });
        return updatedClassroom;
    } catch (error) {
        console.error('Erro ao editar Sala! ', error);
    }
};

module.exports = {
    getAllClassrooms,
    getAllClassroomByTeacherId,
    createClassroom,
    editClassroom
};
