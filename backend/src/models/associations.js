const user = require('./UserModel');
const teacher = require('./TeacherModel');
const classroom = require('./ClassroomModel');
const student = require('./StudentModel');
const track = require('./TrackModel');
const Module = require('./ModuleModel');

// Definindo as associações
user.hasOne(teacher, { foreignKey: 'userid', as: 'teacherDetails' });
teacher.hasMany(classroom, { foreignKey: 'teacherid', as: 'classrooms' });
classroom.belongsTo(teacher, { foreignKey: 'teacherid', as: 'teacher' });
classroom.hasMany(student, { foreignKey: 'classroomid', as: 'students' });
classroom.belongsTo(track, { foreignKey: 'trackid', as: 'track' });
track.hasMany(Module, { foreignKey: 'trackid', as: 'modules' });
Module.belongsTo(track, { foreignKey: 'trackid', as: 'track' });

module.exports = {
    user,
    teacher,
    classroom,
    student,
    track,
    module
};
