const user = require('../models/UserModel');
const studentAchievement = require('../models/StudentAchievementModel');
const achievement = require('../models/AchievementModel');
const classroom = require('../models/ClassroomModel');
const classroomStudent = require('../models/ClassroomStudentModel');

class Student {
    constructor(username, profilepicture) {
        this.username = username;
        this.profilePicture = profilepicture;
    }
}

class Achievement {
    constructor(achievementname, imageurl) {
        this.achievementname = achievementname;
        this.imageurl = imageurl;
    }
}

class StudentAchievement {
    constructor(studentid, achievementid) {
        this.studentid = studentid;
        this.achievementid = achievementid;
    }
};

class Classroom {
    constructor(classroomname) {
        this.classroomname = classroomname;
    }
}

class ClassroomStudent {
    constructor(classroomid, studentid) {
        this.classroomid = classroomid;
        this.studentid = studentid;
    }
}

class HomeData {
    constructor(student, achievements, classroom) {
        this.student = student;
        this.achievements = achievements;
        this.classroom = classroom;
    }
}

const getAchievementAndStudent = async (userid, studentid) => {

    try {
        //Busca os dados do aluno usando o userid
        const homeStudentData = await user.findOne({
            where: {
                userid: userid,
                role: 'student'
            },
            attributes: ['username', 'profilepicture']
        });


        if (!homeStudentData) {
            throw new Error('Aluno não encontrado.');
        }
        //Cria objeto aluno
        const student = new Student(homeStudentData.username, homeStudentData.profilepicture);

        const homeAchievementData = await achievement.findAll({
            include: [{
                model: studentAchievement,
                as: 'studentAchievement', // use o alias definido na associação
                where: { studentid: studentid },
                attributes: ['studentid', 'achievementid']
            }],
            attributes: ['achievementname', 'imageurl']
        });

        //criar objetos Conquista com dados 
        const achievements = homeAchievementData.map(achievement =>
            new Achievement(
                achievement.achievementname,
                achievement.imageurl
            )
        );

        // Buscar dados das salas de aula associadas ao teacherid
        const homeClassData = await classroom.findAll({
            include: [{
                model: classroomStudent,
                as: 'classroomStudents', // use o alias definido na associação
                where: { studentid: studentid },
                attributes: ['classroomid', 'studentid']
            }],
            attributes: ['classroomname']
        });

        //criar objetos Conquista com dados 
        const classrooms = homeClassData.map(classroom =>
            new Classroom(
                classroom.classroomname
            )
        );

        return new HomeData(student, achievements, classrooms);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { getAchievementAndStudent };