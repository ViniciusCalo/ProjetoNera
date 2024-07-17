const express = require('express');
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
        //cria usuario
        const newUser = await userRepo.createUser({ username, useremail, userpassword, role });

        //se a role do user for igual a teacher, então registra como teacher na tbteacher
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

router.post('/login', async (request, response) => {
    try {
        const { useremail, userpassword, role, teachercpf } = request.body;
        const { token } = await userRepo.loginUser({ useremail, userpassword, role });

        if (role === 'teacher') {
            if (!teachercpf) {
                return response.status(400).json({ message: "CPF is required for teachers" });
            }
            const {token} = await teacherController.teacherLogin({ useremail, teachercpf });
            return response.status(200).json({ message: "Teacher logged successfully", token });
        }

        return response.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        return response.status(401).json({ message: error.message || "Internal server error" });
    }
});

module.exports = router;
