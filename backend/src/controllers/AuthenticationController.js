const express = require('express');
const passport = require('passport');
const router = express.Router();

const verifyToken = router.post('/user/login/verifyToken', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const user = request.user;
        return response.status(200).json({ message: "Token é valido", user });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

module.exports = {verifyToken};