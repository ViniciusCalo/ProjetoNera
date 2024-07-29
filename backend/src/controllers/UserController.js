const express = require('express');
const passport = require('passport');
const userRepo = require('../repositories/UserRepository');
const userModel = require('../models/CanonicalDataModel/UserModel');
const teacherController = require('../controllers/TeacherController');
const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const users = await userRepo.getAll();
        return response.status(200).json(users);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

router.post('/register', async (request, response) => {
    try {
        const { username, useremail, userpassword, role, teachercpf } = request.body;
        let profilepicture = null;

        // Verifica se a role é "teacher" e se teachercpf está preenchido
        if (role === 'teacher' && (!teachercpf || teachercpf.trim() === '')) {
            return response.status(400).json({ message: "CPF do professor é obrigatório." });
        }

        // Cria usuário
        const newUser = await userRepo.createUser({ username, useremail, userpassword, role, profilepicture });

        // Se a role do user for igual a teacher, então registra como teacher na tbteacher
        if (role === 'teacher') {
            const newTeacher = await teacherController.registerUserAsATeacher({
                userid: newUser.userid,
                teachercpf: teachercpf
            });
            return response.status(201).json({ message: "Teacher created successfully", newUser, newTeacher });
        }

        return response.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

// Nova rota para atualizar a profilepicture
router.put('/uploadpic/:userid', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const { userid } = request.params;
        const { profilepicture } = request.body;

        // Verifica se a URL da foto de perfil foi fornecida
        if (!profilepicture || profilepicture.trim() === '') {
            return response.status(400).json({ message: "URL da foto de perfil é obrigatória." });
        }

        // Atualiza o usuário com a nova foto de perfil
        const updatedUser = await userRepo.uploadProfilePic(userid, profilepicture);

        return response.status(200).json({ message: "Foto de perfil atualizada com sucesso.", updatedUser });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

// Rota para obter a foto de perfil do usuário
router.get('/profilepicture/:userid', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const { userid } = request.params;

        const profilepicture = await userRepo.getProfilePicture(userid);

        if (!profilepicture) {
            return response.status(404).json({ message: "Usuário não encontrado ou sem foto de perfil." });
        }

        return response.status(200).json({ profilepicture });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});



router.post('/login', async (request, response) => {
    try {
        const { useremail, userpassword, role, teachercpf } = request.body;
        const userLoginResult = await userRepo.loginUser({ useremail, userpassword, role });

        if (role === 'teacher') {
            if (!teachercpf) {
                return response.status(400).json({ message: "CPF is required for teachers" });
            }
            const teacherLoginResult = await teacherController.teacherLogin({ useremail, teachercpf });
            return response.status(200).json({
                message: "Teacher logged successfully",
                token: teacherLoginResult.token,
                username: teacherLoginResult.name,
                profilepic: userLoginResult.profilepic
            });
        }

        return response.status(200).json({
            message: "Login successful",
            token,
            username: name,
            profilepic: profilepic
        });
    } catch (error) {
        console.error(error);
        return response.status(401).json({ message: error.message || "Internal server error" });
    }
});

module.exports = router;
