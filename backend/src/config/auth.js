const passport = require('passport');
const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config();
const jwtConfig = require('./jwtConfig');
const userModel = require('../models/CanonicalDataModel/UserModel');

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
            console.log('User found: ', user);
            return done(null, {
              userid: user.userid,
              role: user.role
            });
          }
          console.log('User not found');
          return done(null, false);
        })
        .catch(err => {
          console.log('Error finding user:', err);
          return done(err, false);
        });
    })
  );
};

applyPassportStrategy(passport);
// passportStraregyToExtractTokenFromBody(passport);

module.exports = passport;
