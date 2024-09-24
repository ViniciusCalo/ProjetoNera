const userModel = require('../models/UserModel');
const classroomModel = require('../models/ClassroomModel');
const trackModel = require('../models/TrackModel'); 


class Teacher {
    constructor(username, profilepicture, userid) {
        this.teacherName = username;
        this.teacherPicture = profilepicture;
        this.teacherid = userid
    }
}

class Classroom {
    constructor( classroomName, classroomId){
        this.classroomName = classroomName;
        this.classroomId = classroomId;
    }
}

class Track {
    constructor ( trackName, trackDescription) {
        this.trackName = trackName;
        this.trackDescription = trackDescription;
    }
}

class HomeData {
    constructor (teacher, classrooms, tracks){
        this.teacher = teacher;
        this.classrooms = classrooms;
        this.tracks = tracks;
    }
}

const getClassroomAndTeacher = async() => {
    try {
        const homeTeacherData = await userModel.User.findOne ({
            where: { role: 'teacher' },
            include: [{
                model: userModel.User,
                attributes: ['username', 'profilepicture', 'userid']
            }]
        })

        const teacher = new Teacher(homeTeacherData.username, homeTeacherData.profilepicture, homeTeacherData.userid)

        const homeClassData = await classroomModel.Classroom.findOne({
            where: { teacherid: homeTeacherData.userid },
            include: [{
                model: classroomModel.Classroom,
                attributes: ['classroomname', 'classroomid']
            }]
        })

        const classroom = new Classroom(homeClassData.classroomname, homeClassData.classroomid);

        const trackData = await trackModel.findAll({
            attributes: ['trackname', 'trackdescription']
        })

        const tracks = trackData.map(track => new Track(track.trackname, track.trackdescription));

        return new HomeData(teacher, classroom, tracks)

    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    getClassroomAndTeacher
}