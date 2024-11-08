const express = require('express');
const passport = require('passport');
const router = express.Router();
const homeRepo = require('../repositories/HomeStudentRepository');

router.get('/', passport.authenticate('jwt', {session:false }), async (request, response) => {
    try {
        console.log('Usuário logado:', request.user);

        const {userid, role} = request.user;

        if (role != 'student') {
            return response.status(403).json({ message: "Você não é um aluno, não deve acessar essa tela" });

        } else {
            const {studentid} = request.user;
            const homeData = await homeRepo.getAchievementAndStudent(userid, studentid);
            return response.status(200).json(homeData);
        }

    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error"});
    }
});

module.exports = router;
