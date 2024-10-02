const user = require('./UserModel');
const teacher = require('./TeacherModel');
const classroom = require('./ClassroomModel');
const student = require('./StudentModel');
const track = require('./TrackModel');
const Module = require('./ModuleModel');
const achievement = require('./AchievementModel');
const student = require('./StudentModel');
const studentAchievement = require('./StudentAchievementModel');

// Definindo as associações
user.hasOne(teacher, { foreignKey: 'userid', as: 'teacherDetails' });
teacher.hasMany(classroom, { foreignKey: 'teacherid', as: 'classrooms' });
classroom.belongsTo(teacher, { foreignKey: 'teacherid', as: 'teacher' });
classroom.hasMany(student, { foreignKey: 'classroomid', as: 'students' });
classroom.belongsTo(track, { foreignKey: 'trackid', as: 'track' });
track.hasMany(Module, { foreignKey: 'trackid', as: 'modules' });
Module.belongsTo(track, { foreignKey: 'trackid', as: 'track' });
student.hasMany(achievement, { foreignKey: 'achievementsid', as: 'achievement' });
user.hasOne(student, { foreignKey: 'userid', as: 'studentDetails' });
achievement.belongsTo(student, { foreignKey: 'achievementsid', as: 'students' });
studentAchievement.hasMany(achievement, { foreignKey: 'achievementsid'});
studentAchievement.hasMany(student, { foreignKey: 'studentid'});

module.exports = {
    user,
    teacher,
    classroom,
    student,
    track,
    module,
    student,
    achievement
};