const classroomModel = require('../models/ClassroomModel');
const classroomStudentModel = require('../models/ClassroomStudentModel');
const classroomRepo = require('../repositories/ClassroomRepository');
const studentModel = require('../models/StudentModel');
const userModel = require('../models/UserModel');
const teacherModel = require('../models/TeacherModel');

const addStudentOnClassroom = async ({ studentid, tokenclass }) => {
    try {
        //Verificando se o Aluno exist
        const studentExists = await studentModel.Student.findByPk(studentid);
        if (!studentExists) {
            throw new Error('Aluno não encontrado');
        }

        //Verificando se a sala existe
        const classroom = await classroomModel.Classroom.findOne({ where: { tokenclass } });
        if (!classroom) {
            throw new Error('Token inválido ou Sala não encontrada');
        }

        //Verificando se o tokenclass do body é o mesmo do que esta salvo na tbclassroom
        if (tokenclass != classroom.tokenclass) {
            throw new Error('Token inválido');
        }

        //se token for valido
        const newEnrollment = await classroomStudentModel.ClassroomStudent.create({
            classroomid: classroom.classroomid,
            studentid
        });
        // Buscar o nome de usuário do professor
        const teacher = await teacherModel.Teacher.findOne({ where: { teacherid: classroom.teacherid } });
        if (!teacher) {
            throw new Error('Professor não encontrado');
        }
        console.log(teacher);

        const user = await userModel.User.findOne({ where: { userid: teacher.userid}});
        // Buscar detalhes da sala de aula
        const classroomDetails = {
            classroomid: classroom.classroomid,
            studentid,
            classroomname: classroom.classroomname,
            classroomdescription: classroom.classroomdescription,
            moduleid: classroom.moduleid,
            trackid: classroom.trackid,
            teacherUsername: user.username
        };
        
        return { classroomDetails };
    } catch (error) {
        console.error('Error adding student to classroom: ', error);
        throw error;
    }
}

const getAllClassroomsByStudent = async ({ studentid }) => {
    try {
        // Verificando se o Aluno existe
        const studentExists = await studentModel.Student.findByPk(studentid);
        if (!studentExists) {
            throw new Error('Aluno não encontrado');
        }

        // Buscar todas as associações aluno-sala
        const classroomStudents = await classroomStudentModel.ClassroomStudent.findAll({ where: { studentid } });

        // Buscar detalhes das salas de aula e nomes de usuários dos professores
        const classrooms = await Promise.all(classroomStudents.map(async (enrollment) => {
            const classroom = await classroomModel.Classroom.findByPk(enrollment.classroomid);
            const teacher = await userModel.User.findOne({ where: { userid: classroom.teacherid, role: 'teacher' } });
            return {
                classroomname: classroom.classroomname,
                classroomdescription: classroom.classroomdescription,
                moduleid: classroom.moduleid,
                trackid: classroom.trackid,
                teacherUsername: teacher ? teacher.username : null
            };
        }));

        return classrooms;
    } catch (error) {
        console.error('Error getting classrooms by student: ', error);
        throw error;
    }
}

module.exports = {
    addStudentOnClassroom,
    getAllClassroomsByStudent
}