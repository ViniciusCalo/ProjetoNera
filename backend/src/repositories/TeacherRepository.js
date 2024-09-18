const teacherModel = require('../models/TeacherModel');
const userModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const { captureRejectionSymbol } = require('supertest/lib/test');

const registerUserAsATeacherViaGoogle = async ({ userid }) => {
    try {
        // verificando se professor ja existe, pelo id de usuario dele
        const teacherExists = await teacherModel.Teacher.findOne({ where: { userid } });
        if (teacherExists) {
            throw new Error('Teacher already exists');
        }
        const newTeacher = await teacherModel.Teacher.create(
            { userid }
        );
        return newTeacher;
    } catch (err) {
        return console.error(err);
    }
}

const registerUserAsATeacher = async ({ userid, teachercpf }) => {
    try {
        //encriptando cpf do professor
        const hashedCpf = await bcrypt.hash(teachercpf, 10);

        // verificando se professor ja existe, pelo id de usuario dele
        const teacherExists = await teacherModel.Teacher.findOne({ where: { userid } });
        if (teacherExists) {
            throw new Error('Teacher already exists');
        }
        const newTeacher = await teacherModel.Teacher.create(
            {
                userid,
                teachercpf: hashedCpf
            }
        );
        return newTeacher;
    } catch (err) {
        return console.error(err);
    }
}

const loginTeacherGoogle = async ({ useremail, userid }) => {
    try {
        // Verificando se os user inputs estão corretos
        const user = await userModel.User.findOne({ where: { useremail, role: 'teacher' } });

        if (!user) {
            throw new Error('Invalid email or role');
        }

        // Verificando se o user é professor
        const teacher = await teacherModel.Teacher.findOne({ where: { userid: user.userid } });

        if (!teacher) {
            throw new Error('User is not a teacher');
        }

        // Gerando o token novo caso ele seja professor
        const token = jwt.sign({ teacherid: teacher.teacherid, userid: teacher.userid, role: user.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        const name = user.username;
        const profilePic = user.profilePicture;

        return { token, name, profilePic };
    } catch (error) {
        console.error('Error logging in teacher:', error);
        throw error;
    }
}

const loginTeacher = async ({ useremail, teachercpf }) => {
    try {
        // Verificando se os user inputs estão corretos
        const user = await userModel.User.findOne({ where: { useremail, role: 'teacher' } });

        if (!user) {
            throw new Error('Invalid email or role');
        }

        // Verificando se o user é professor
        const teacher = await teacherModel.Teacher.findOne({ where: { userid: user.userid } });

        if (!teacher) {
            throw new Error('User is not a teacher');
        }

        // Checando o CPF do usuário
        const isCpfValid = await bcrypt.compare(teachercpf, teacher.teachercpf);

        if (!isCpfValid) {
            throw new Error('Invalid CPF');
        }
        if (isCpfValid === null || isCpfValid.length === 0) {
            throw new Error('CPF cannot be empty');
        }

        // Gerando o token novo caso ele seja professor
        const token = jwt.sign({ teacherid: teacher.teacherid, userid: teacher.userid, role: user.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        const name = user.username;
        const profilePic = user.profilePicture;

        return { token, name, profilePic };
    } catch (error) {
        console.error('Error logging in teacher:', error);
        throw error;
    }
};

const getTeacherById = async (request) => {
    try {
        const teacher = await teacherModel.Teacher.findOne({ where: { userid: request.user } });
        return teacher;
    } catch (error) {
        console.error('Error fetching teacher:', error);
        throw error;
    }
};

module.exports = {
    getTeacherById,
    registerUserAsATeacher,
    loginTeacher,
    registerUserAsATeacherViaGoogle,
    loginTeacherGoogle
};