const classroom = require('../models/ClassroomModel');
const classroomStudent = require('../models/ClassroomStudentModel');
const classroomRepo = require('../repositories/ClassroomRepository');
const student = require('../models/StudentModel');
const user = require('../models/UserModel');
const teacher = require('../models/TeacherModel');

const addStudentOnClassroom = async ({ studentid, tokenclass }) => {
    try {
        //Verificando se o Aluno exist
        const studentExists = await student.findByPk(studentid);
        if (!studentExists) {
            throw new Error('Aluno não encontrado');
        }

        //Verificando se a sala existe
        const classroomExist = await classroom.findOne({ where: { tokenclass } });
        if (!classroomExist) {
            throw new Error('Token inválido ou Sala não encontrada');
        }

        //Verificando se o tokenclass do body é o mesmo do que esta salvo na tbclassroom
        if (tokenclass != classroomExist.tokenclass) {
            throw new Error('Token inválido');
        }

        //se token for valido
        const newEnrollment = await classroomStudent.create({
            classroomid: classroomExist.classroomid,
            studentid
        });

        // Buscar o nome de usuário do professor
        const searchTeacherName = await teacher.findOne({ where: { teacherid: classroomExist.teacherid } });
        if (!searchTeacherName) {
            throw new Error('Professor não encontrado');
        }
        console.log(searchTeacherName);

        const teacherName = await user.findOne({ where: { userid: searchTeacherName.teacherid}});
        // Buscar detalhes da sala de aula
        const classroomDetails = {
            classroomid: classroomExist.classroomid,
            studentid,
            classroomname: classroomExist.classroomname,
            classroomdescription: classroomExist.classroomdescription,
            moduleid: classroomExist.moduleid,
            trackid: classroomExist.trackid,
            teacherUsername: teacherName.username
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
        const studentExists = await student.findByPk(studentid);
        if (!studentExists) {
            throw new Error('Aluno não encontrado');
        }
        
        // Buscar todas as associações aluno-sala
        const classroomStudents = await classroomStudent.findAll({ where: { studentid } });

        // Buscar detalhes das salas de aula e nomes de usuários dos professores
        const classrooms = await Promise.all(classroomStudents.map(async (enrollment) => {
            const findclassroom = await classroom.findByPk(enrollment.classroomid);
            
            // Verifique se findclassroom existe e pegue o teacherid corretamente
            if (!findclassroom) {
                throw new Error(`Sala de aula com id ${enrollment.classroomid} não encontrada`);
            }
            
            const findStudent = await user.findOne({ where: { userid: studentExists.studentid, role: 'student' } });
            return {
                classroomname: findclassroom.classroomname,
                classroomdescription: findclassroom.classroomdescription,
                moduleid: findclassroom.moduleid,
                trackid: findclassroom.trackid,
                teacherUsername: findStudent ? findStudent.username : null
            };
        }));
        return classrooms;
    } catch (error) {
        console.error('Error getting classrooms by student: ', error);
        throw error;
    }
};


module.exports = {
    addStudentOnClassroom,
    getAllClassroomsByStudent
}