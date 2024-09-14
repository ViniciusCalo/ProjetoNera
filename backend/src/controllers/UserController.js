const express = require('express');
const userRepo = require('../repositories/UserRepository'); // Ajuste o caminho conforme necessário
const userModel = require('../models/CanonicalDataModel/UserModel'); // Ajuste o caminho conforme necessário
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

// router.get('student/:id', async (request, response) => {
//     try {
//         const role = userModel.User.role();
//         if (role === 'student') {
//             const student = await userRepo.getStudentById(request.params.id);
//             if (!student) {
//                 return response.status(404).json({ message: "Student not found" });
//             }
//             return response.status(200).json(student);
//         } else {
//             console.log('This user is not a Student, unable to get data');
//             return response.status(400).json({ message: "This user is not a Student" });
//         }
//     } catch (error) {
//         console.error(error);
//         return response.status(500).json({ message: error.message || "Internal server error" });
//     }
// });

// router.get('/:id', async (request, response) => {
//     try {
//         const user = await userRepo.getUserById(request.user);
//         if (!user) {
//             return response.status(404).json({ message: "User not found" });
//         }
//         return response.status(200).json(user);
//     } catch (error) {
//         console.error(error);
//         return response.status(500).json({ message: error.message || "Internal server error" });
//     }
// });

router.post('/register', async (request, response) => {
    try {
        const { username, useremail, userpassword, role } = request.body;
        const newUser = await userRepo.createUser({ username, useremail, userpassword, role });
        return response.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

router.post('/login', async (request, response) => {
    try {
        const { useremail, username, role } = request.body;
        const { token } = await userRepo.loginUser({ useremail, username, role});
        return response.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        return response.status(401).json({ message: error.message || "Internal server error" });
    }
});

module.exports = router;
