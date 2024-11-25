const user = require('../models/UserModel');
const classroom = require('../models/ClassroomModel');
const trackModel = require('../models/TrackModel');

class Teacher {
    constructor(username, profilePicture) {
        this.teacherName = username;
        this.teacherPicture = profilePicture;
    }
}

class Classroom {
    constructor(classroomId, classroomName, trackName, trackDescription) {
        this.classroomId = classroomId;
        this.classroomName = classroomName;
        this.trackName = trackName;
        this.trackDescription = trackDescription;
    }
}

class Track {
    constructor(trackId, trackName, moduleid) {
        this.trackId = trackId;
        this.trackName = trackName;
    }
}

class HomeData {
    constructor(teacher, classrooms, track) {
        this.teacher = teacher;
        this.classrooms = classrooms;
        this.track = track;
    }
}

const getClassroomAndTeacher = async (userid, teacherid) => {
    try {
        // Buscar dados do professor usando o userid
        const homeTeacherData = await user.findOne({
            where: { 
                userid: userid,
                role: 'teacher' 
            },
            attributes: ['username', 'profilepicture']
        });

        if (!homeTeacherData) {
            throw new Error('Professor não encontrado.');
        }

        // Criar objeto Teacher
        const teacher = new Teacher(homeTeacherData.username, homeTeacherData.profilepicture);

        // Buscar dados das salas de aula associadas ao teacherid
        const homeClassData = await classroom.findAll({
            where: {
                teacherid: teacherid // Filtrando pelo userid do professor
            },
            include: [{
                model: trackModel, 
                as: 'track',
                attributes: ['trackname', 'trackdescription']
            }],
            attributes: ['classroomid', 'classroomname']
        });

        // Criar objetos Classroom com dados de trilha
        const classrooms = homeClassData.map(classroom => 
            new Classroom(
                classroom.classroomid,
                classroom.classroomname,
                classroom.track.trackname,
                classroom.track.trackdescription
            )
        );

        // Buscar dados das trilhas e contar o número de módulos em cada trilha (se necessário)
        // const trackData = ...

        // Retornar o modelo canônico
        return new HomeData(teacher, classrooms, []); // Passando trilhas se necessário

    } catch (error) {
        console.error(error);
        throw error;
    }
};


module.exports = {
    getClassroomAndTeacher
};
