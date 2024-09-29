const express = require('express');
const passport = require('passport');
const router = express.Router();
const homeRepo = require('../repositories/HomeRepository');

router.get('/', passport.authenticate('jwt', {session:false }), async (request, response) => {
    try {
        console.log('Usuário logado:', request.user);

        const {userid, role} = request.user;

        if (role != 'teacher') {
            return response.status(403).json({ message: "Você não é um professor, não deve acessar essa tela" });

        } else {
            const {teacherid} = request.user;
            const homeData = await homeRepo.getClassroomAndTeacher(userid, teacherid);
            return response.status(200).json(homeData);
        }

    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error"});
    }
});

module.exports = router;
