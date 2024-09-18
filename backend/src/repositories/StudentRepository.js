const userModel = require('../models/CanonicalDataModel/UserModel');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const studentModel = require('../models/CanonicalDataModel/StudentModel');

const registerUserAsAStudent = async ({ userid }) => {
    try {
        // verificando se aluno ja existe, pelo id de usuario dele
        const studentExists = await studentModel.Student.findOne({where: {userid}});
        if (studentExists) {
            throw new Error('Student already exists');
        }
        const newStudent = await studentModel.Student.create(
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
        const studentExists = await studentModel.Student.findOne({ where: { userid } });
        if (studentExists) {
            throw new Error('Student already exists');
        }
        const newStudent = await teacherModel.Teacher.create(
            { userid }
        );
        return newStudent;
    } catch (err) {
        return console.error(err);
    }
}


const loginStudent = async ({ userid, useremail }) => {
    try {
        //verificando se os user inputs estão corretos
        const user = await userModel.User.findOne({ where: { useremail, role: 'student'} });

        if(!user){
            throw new Error('Invalid email or role');
        }

        //Verificando se o user é aluno
        const student = await studentModel.Student.findOne({ where: { userid: user.userid } });
        if(!student){
            throw new Error('User is not a student');
        }

        //gerando o token JWT
        const token = jwt.sign({studentid: student.studentid, userid: student.userid, role: user.role}, 
            jwtConfig.secret, {expiresIn: jwtConfig.expiresIn});
        const name = user.username;
        const profilepic = user.profilePicture;

        return { token, name, profilepic };
    } catch (error) {
        console.error('Error logging in student:', error);
        throw error;
    }
};

const loginStudentGoogle = async ({ useremail, userid }) => {
    try {
        // Verificando se os user inputs estão corretos
        const user = await userModel.User.findOne({ where: { useremail, role: 'student' } });

        if (!user) {
            throw new Error('Invalid email or role');
        }

        // Verificando se o user é aluno
        const student = await studentModel.Student.findOne({ where: { userid: user.userid } });

        if (!student) {
            throw new Error('User is not a student');
        }

        // Gerando o token novo caso ele seja aluno
        const token = jwt.sign({ studentid: student.studentid, userid: student.userid, role: user.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        const name = user.username;
        const profilePic = user.profilePicture;

        return { token, name, profilePic };
    } catch (error) {
        console.error('Error logging in student:', error);
        throw error;
    }
}

const getStudentById = async (request) => {
    try {
        const student = await studentModel.Student.findOne({ where: { userid: request.user } });
        return student;
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