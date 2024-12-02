const { Sequelize } = require('sequelize');
const user = require('../models/UserModel');
const classroom = require('../models/ClassroomModel');
const classroomStudent = require('../models/ClassroomStudentModel');

class ClassroomData {
    constructor(classroomname, studentCount) {
        this.classroomname = classroomname;
        this.studentCount = studentCount;
    }
}

const getClassroomInfos = async (userid, teacherid) => {
    try {

        //Verifica se o professor existe 

        const teacherData = await user.findOne({
            where: {
                userid: userid,
                role: 'teacher'
            },
            attributes: ['username']
        });

        if (!teacherData) {
            throw new Error('Professor não encontrado.');
        }

        //Busca todas as salas associadas ao professor e conta os alunos
        const classroomInfos = await classroom.findAll({
            where: {
                teacherid: teacherid
            },
            attributes: [
                'classroomname',
                [Sequelize.fn('COUNT', Sequelize.col('classroomStudents.studentid')), 'studentCount'],
            ],
            include: [
                {
                    model: classroomStudent,
                    as: 'classroomStudents',
                    attributes: []
                }
            ],
            group: ['classroom.classroomid']
        });

        const formattedClassroomInfos = classroomInfos.map((classroomInfo) =>
            new ClassroomData(
                classroomInfo.classroomname,
                classroomInfo.get('studentCount')
            ));

        return formattedClassroomInfos;

    } catch (error) {
        console.error('Erro ao buscar informações das salas: ', error);
        throw error;
    }
}

module.exports = { getClassroomInfos };

