// Importando o passport
const passport = require('passport');
const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtConfig = require('./jwtConfig');
const user = require('../models/UserModel');
const teacher = require('../models/TeacherModel');
const student = require('../models/StudentModel');
require('dotenv').config();

const applyPassportStrategy = passport => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = jwtConfig.secret;
  passport.use(
    new Strategy(options, (payload, done) => {
      console.log('JWT Payload:', payload);
      user.findOne({ where: { userid: payload.userid, role: payload.role } })
        .then(User => {
          if (User) {
            console.log('User found');
            if (User.role === 'teacher') {
              teacher.findOne({ where: { userid: User.userid } })
                .then(Teacher => {
                  if (Teacher) {
                    console.log('Teacher Found');
                    return done(null, {
                      teacherid: Teacher.teacherid,
                      userid: Teacher.userid,
                      role: User.role
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
            } else if(User.role === 'student'){
              student.findOne({ where: { userid: User.userid } })
              .then(Student => {
                if (Student) {
                  console.log('Student Found');
                  return done(null, {
                    studentid: Student.studentid,
                    userid: Student.userid,
                    role: User.role
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
                userid: User.userid,
                role: User.role
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

const authenticateJWT = passport.authenticate('jwt', { session: false });

const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Acesso negado' });
    }
    next();
  };
};

module.exports = {
  authenticateJWT,
  authorizeRole
};
