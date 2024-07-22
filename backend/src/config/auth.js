const passport = require('passport');
const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtConfig = require('./jwtConfig');
const userModel = require('../models/CanonicalDataModel/UserModel');
const teacherModel = require('../models/CanonicalDataModel/TeacherModel');
const studentModel = require('../models/CanonicalDataModel/StudentModel');
require('dotenv').config();

const applyPassportStrategy = passport => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = jwtConfig.secret;
  passport.use(
    new Strategy(options, (payload, done) => {
      console.log('JWT Payload:', payload);
      userModel.User.findOne({ where: { userid: payload.userid, role: payload.role } })
        .then(user => {
          if (user) {
            console.log('User found');
            if (user.role === 'teacher') {
              teacherModel.Teacher.findOne({ where: { userid: user.userid } })
                .then(teacher => {
                  if (teacher) {
                    console.log('Teacher Found');
                    return done(null, {
                      teacherid: teacher.teacherid,
                      userid: teacher.userid,
                      role: user.role
                    });
                  } else {
                    console.log('User is not a teacher');
                    return done(null, false);
                  }
                })
                .catch(err => {
                  console.log('Error finding teacher:', err);
                  return done(err, false);
                });
            } else if(user.role === 'student'){
              studentModel.Student.findOne({ where: { userid: user.userid } })
              .then(student => {
                if (student) {
                  console.log('Student Found');
                  return done(null, {
                    studentid: student.teacherid,
                    userid: student.userid,
                    role: user.role
                  });
                } else {
                  console.log('User is not a Student');
                  return done(null, false);
                }
              })
              .catch(err => {
                console.log('Error finding teacher:', err);
                return done(err, false);
              });
            } else {
              return done(null, {
                userid: user.userid,
                role: user.role
              });
              
            }
          } else {
            console.log('User not found');
            return done(null, false);
          }
        })
        .catch(err => {
          console.log('Error finding user:', err);
          return done(err, false);
        });
    })
  );
};

applyPassportStrategy(passport);

module.exports = passport;
