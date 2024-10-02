const user = require('../models/UserModel');
const studentAchievement = require('../models/StudentAchievementModel');
const achievement = require('../models/AchievementModel');

class Student {
    constructor(userid, username, profilepicture) {
        this.username = username;
        this.profilePicture = profilepicture;
    }
}

class Achievement {
    constructor(achievementname, criteria, imageurl) {
        this.achievementname = achievementname;
        this.criteria = criteria;
        this.imageurl = imageurl;
    }
}

class StudentAchievement {
    constructor(studentid, achievementid) {
        this.studentid = studentid;
        this.achievementid = achievementid;
    }
};

class HomeData {
    constructor(student, achievements) {
        this.student = student;
        this.achievements = achievements;
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
        const student = new Student(homeStudentData.username, homeStudentData.profilePicture);

        const homeAchievementData = await achievement.findAll({
            where: {
                studentid: studentid
            },
            include: [{
                model: studentAchievement,
                as: 'achievements',
                attributes: ['studentid', 'achievementid']
            }],
            attributes: ['achievementname', 'imageurl']
        });

        //criar objetos Conquista com dados 
        const achievements = homeAchievementData.map(achievement =>
            new Achievement(
                achievement.achievementid, achievement.achievementname, achievement.imageurl
            )
        );
        return new HomeData(student, achievements);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {getAchievementAndStudent};