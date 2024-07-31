const passport = require('passport');
const authentication = require('../config/auth');

const authenticateJWT = passport.authenticate('jwt', { session: false });

const authorizeRole = role => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: "Acesso negado" });
        }
        next();
    };
};

module.exports = { authenticateJWT, authorizeRole };
