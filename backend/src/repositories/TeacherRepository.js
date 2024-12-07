const teacher = require('../models/TeacherModel');
const user = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const { captureRejectionSymbol } = require('supertest/lib/test');

const registerUserAsATeacherViaGoogle = async ({ userid }) => {
    try {
        // verificando se professor ja existe, pelo id de usuario dele
        const teacherExists = await teacher.findOne({ where: { userid } });
        if (teacherExists) {
            throw new Error('Teacher already exists');
        }
        const newTeacher = await teacher.create(
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
        const teacherExists = await teacher.findOne({ where: { userid } });
        if (teacherExists) {
            throw new Error('Teacher already exists');
        }
        const newTeacher = await teacher.create(
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
        const users = await user.findOne({ where: { useremail, role: 'teacher' } });

        console.log(users)
        if (!users) {
            throw new Error('Invalid email or role');
        }

        // Verificando se o user é professor
        const isTeacher = await teacher.findOne({ where: { userid: users.userid } });

    console.log(isTeacher)

        // Gerando o token novo caso ele seja professor
        const token = jwt.sign({ teacherid: isTeacher.teacherid, userid: isTeacher.userid, role: users.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        const name = users.username;
        const profilePic = users.profilePicture;

        return { token, name, profilePic };
    } catch (error) {
        console.error('Error logging in teacher:', error);
        throw error;
    }
}

const loginTeacher = async ({ useremail, teachercpf }) => {
    try {
        // Verificando se os user inputs estão corretos
        const users = await user.findOne({ where: { useremail, role: 'teacher' } });

        if (!users) {
            throw new Error('Invalid email or role');
        }

        // Verificando se o user é professor
        const isTeacher = await teacher.findOne({ where: { userid: users.userid } });

        if (!isTeacher) {
            throw new Error('User is not a teacher');
        }

        // Checando o CPF do usuário
        const isCpfValid = await bcrypt.compare(teachercpf, isTeacher.teachercpf);

        if (!isCpfValid) {
            throw new Error('Invalid CPF');
        }
        if (isCpfValid === null || isCpfValid.length === 0) {
            throw new Error('CPF cannot be empty');
        }

        // Gerando o token novo caso ele seja professor
        const token = jwt.sign({ teacherid: isTeacher.teacherid, userid: isTeacher.userid, role: users.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        const name = users.username;
        const profilePic = users.profilePicture;

        return { token, name, profilePic };
    } catch (error) {
        console.error('Error logging in teacher:', error);
        throw error;
    }
};

const getTeacherById = async (request) => {
    try {
        const isTeacher = await teacher.findOne({ where: { userid: request.user } });
        return isTeacher;
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