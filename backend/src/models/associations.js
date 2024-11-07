const user = require('./UserModel');
const teacher = require('./TeacherModel');
const classroom = require('./ClassroomModel');
const student = require('./StudentModel');
const track = require('./TrackModel');
const Module = require('./ModuleModel');
const achievement = require('./AchievementModel');
const studentAchievement = require('./StudentAchievementModel');
const classroomStudent = require('./ClassroomStudentModel');

// Definindo as associações
user.hasOne(teacher, { foreignKey: 'userid', as: 'teacherDetails' });
teacher.hasMany(classroom, { foreignKey: 'teacherid', as: 'classrooms' });
classroom.belongsTo(teacher, { foreignKey: 'teacherid', as: 'teacher' });
//classroom.hasMany(student, { foreignKey: 'classroomid', as: 'students' });
classroom.hasMany(classroomStudent, { foreignKey: 'classroomid', as: 'classroomStudents'});
classroom.belongsTo(track, { foreignKey: 'trackid', as: 'track' });
track.hasMany(Module, { foreignKey: 'trackid', as: 'modules' });
Module.belongsTo(track, { foreignKey: 'trackid', as: 'track' });
student.hasMany(achievement, { foreignKey: 'achievementid', as: 'achievement' });
user.hasOne(student, { foreignKey: 'userid', as: 'studentDetails' });
achievement.belongsTo(student, { foreignKey: 'achievementid', as: 'students' });
achievement.hasMany(studentAchievement, { foreignKey: 'achievementid', as: 'studentAchievement'});
studentAchievement.hasMany(achievement, { foreignKey: 'achievementid'});
studentAchievement.hasMany(student, { foreignKey: 'studentid'});
studentAchievement.belongsTo(achievement, { foreignKey: 'achievementid', as: 'achievement'})
// classroomStudent.hasMany(classroom, { foreignKey: 'classroomid'});
// classroomStudent.hasMany(student, { foreignKey: 'studentid'});
classroomStudent.belongsTo(classroom, { foreignKey: 'classroomid', as: 'classroom'});

module.exports = {
    user,
    teacher,
    classroom,
    student,
    track,
    module,
    student,
    achievement,
    studentAchievement,
    classroomStudent
};
