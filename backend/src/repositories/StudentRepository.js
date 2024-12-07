const user = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const student = require('../models/StudentModel');

const registerUserAsAStudent = async ({ userid }) => {
    try {
        // verificando se aluno ja existe, pelo id de usuario dele
        const studentExists = await student.findOne({ where: { userid } });

        if (studentExists) {
            throw new Error('Student already exists');
        }
        const newStudent = await student.create(
            { userid }
        );
        return newStudent;
    } catch (err) {
        return console.error(err);
    }
}

const registerUserAsAStudentViaGoogle = async ({ userid }) => {
    try {
        // verificando se professor ja existe, pelo id de usuario dele
        const studentExists = await student.findOne({ where: { userid } });
        if (studentExists) {
            throw new Error('Student already exists');
        }
        const newStudent = await student.create(
            { userid }
        );
        return newStudent;
    } catch (err) {
        return console.error(err);
    }
}

const loginStudent = async ({ useremail }) => {
    try {
        // Verificando se o usuário existe e é um estudante
        const rightUser = await user.findOne({ where: { useremail, role: 'student' } });

        if (!rightUser) {
            throw new Error('Invalid email or role');
        }

        // Usando o userid correto retornado de rightUser
        const userIsStudent = await student.findOne({ where: { userid: rightUser.userid } });

        if (!userIsStudent) {
            throw new Error('User is not a student');
        }

        console.log('User is Student:', userIsStudent);

        // Gerando o token JWT
        const token = jwt.sign(
            {
                studentid: userIsStudent.studentid,
                userid: rightUser.userid,
                role: rightUser.role,
            },
            jwtConfig.secret,
            { expiresIn: jwtConfig.expiresIn }
        );

        const name = rightUser.username;
        const profilepic = rightUser.profilepicture || null; // Garantindo consistência

        return { token, name, profilepic };
    } catch (error) {
        console.error('Error logging in student:', error);
        throw error;
    }
};

const loginStudentGoogle = async ({ useremail, userid }) => {
    try {
        // Verificando se os user inputs estão corretos
        const rightUser = await user.findOne({ where: { useremail, role: 'student' } });

        if (!rightUser) {
            throw new Error('Invalid email or role');
        }

        // Verificando se o user é aluno
        const userIsStudent = await student.findOne({ where: { userid: rightUser.userid } });

        if (!userIsStudent) {
            throw new Error('User is not a student');
        }

        // Gerando o token novo caso ele seja aluno
        const token = jwt.sign({ studentid: userIsStudent.studentid, userid: userIsStudent.userid, role: rightUser.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        const name = rightUser.username;
        const profilePic = rightUser.profilePicture;

        return { token, name, profilePic };
    } catch (error) {
        console.error('Error logging in student:', error);
        throw error;
    }
}

const getStudentById = async (request) => {
    try {
        const students = await student.findOne({ where: { userid: request.user } });
        return students;
    } catch (error) {
        console.error('Error fetching teacher:', error);
        throw error;
    }
}

module.exports = {
    registerUserAsAStudent,
    loginStudent,
    getStudentById,
    registerUserAsAStudentViaGoogle,
    loginStudentGoogle
};