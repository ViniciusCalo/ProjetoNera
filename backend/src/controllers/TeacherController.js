const teacherRepo = require('../repositories/TeacherRepository');
const teacherModel = require('../models/CanonicalDataModel/TeacherModel');
const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const teacher = await teacherRepo.getAll();
        return response.status(200).json(teacher);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

const registerUserAsATeacher = async ({ userid, teachercpf }) => {
    try {
        const newTeacher = await teacherRepo.registerUserAsATeacher({
            userid: userid,
            teachercpf: teachercpf,
        });
        return newTeacher;

    } catch (error) {
        throw new Error('Erro ao criar professor: ', error.message);
    }
};

const teacherLogin = async ({ useremail, teachercpf }) => {
    try {
        const { token, name, profilePic } = await teacherRepo.loginTeacher({ useremail, teachercpf });
        return { token, name, profilePic };
    } catch (error) {
        throw new Error('Erro no login do professor: ' + error.message);
    }
}


const getTeacherById = async (request, response) => {
    try {
        console.log("Teacher: ", request.user);
        const teacher = await teacherRepo.getTeacherById();
        if (!teacher) {
            return response.status(404).json({ message: error.message || "Teacher not found" });
        }
        return response.status(200).json(teacher);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
};

const CpfIsNull = async ({teachercpf}) => {
    if (teachercpf === null || teachercpf.length === 0) {
        throw new Error('CPF cannot be empty');
    }
}
module.exports = {
    registerUserAsATeacher,
    teacherLogin,
    getTeacherById,
    CpfIsNull
};