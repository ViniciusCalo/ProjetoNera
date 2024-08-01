const studentRepo = require('../repositories/StudentRepository');
const passport = require('passport');
const express = require('express');
const router = express.Router();

const registerUserStudent = async ({ userid }) => {
    try {
        const newStudent = await studentRepo.registerUserAsAStudent({
            userid: userid
        });
        return newStudent;
    } catch (error) {
        throw new Error('Erro ao criar aluno: ', error.message);
    }
}

const googleRegisterUserAsStudent = async ({userid }) => {
    try{
        const newStudent = await studentRepo.registerUserAsAStudentViaGoogle({
            userid: userid
        });
        return newStudent;
    } catch (error) {
        throw new Error('Erro ao registrar aluno via Google: ', error.message);
    }
}

const studentLogin = async ({ useremail }) => {
    try {
        const { token, name, profilePic } = await studentRepo.loginStudent({ useremail });
        return { token, name, profilePic };
    } catch (error) {
        throw new Error('Erro no login do aluno: ', error.message);
    }
}

const studentGoogleLogin = async ({useremail}) => {
    try {
        const { token, name, profilePic } = await studentRepo.loginStudentGoogle({ useremail });
        return { token, name, profilePic };
    } catch (error) {
        throw new Error('Erro no login do aluno: ' + error.message);
    }
}

const getStudentById = async (request, response) => {
    try {
        console.log("Student: ", request.user);
        const student = await studentRepo.getStudentById(request);
        if (!student) {
            return response.status(404).json({ message: error.message || "Student not found" });
        }
        return response.status(200).json(student);

    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
}

module.exports = {
    registerUserStudent,
    studentLogin,
    getStudentById,
    googleRegisterUserAsStudent,
    studentGoogleLogin
 };