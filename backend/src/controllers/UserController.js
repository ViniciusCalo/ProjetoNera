const userRepo = require('../repositories/UserRepository');
const userModel = require('../models/CanonicalDataModel/UserModel');
const express = require('express');
const { get } = require('../router');
const router = express.Router();

const getAll = router.get('/user', async (request, response) => {
    try {
        const users = await userRepo.getAll();
        return response.status(200).json(users);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

const getStudentById = router.get('/user/student/:id', async (request, response) => {
    try {
        const role = userModel.User.role();
        role == 'student' ? student = await userRepo.getStudentById(request.params.id) : console.log('This user is not a Student, unable to get data');
        if (!student) {
            return response.status(404).json({ message: error.message || "Student not found" });
        }
        return response.status(200).json(student);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

const getUserById = router.get('/user/:id', async (request, response) => {
    try {
        const user = await userRepo.getUserById(request.params.id);
        if (!user) {
            return response.status(404).json({ message: error.message || "User not found" });
        }
        return response.status(200).json(user);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

const createUser = router.post('/user/register', async (request, response) => {
    try {
        const { username, useremail, userpassword, role } = request.body;
        const newUser = await userRepo.createUser({ username, useremail, userpassword, role });
        return response.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

const login = router.post('/user/login', async (request, response) => {
    try {
        const { useremail, userpassword } = request.body;
        const { user, token } = await userRepo.loginUser({ useremail, userpassword });
        return response.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        return response.status(401).json({ message: error.message || "Internal server error" });
    }
});

const all = router.get( async (request, response) => {
    getAll();
    getUserById();
    createUser();
    login();
    getStudentById();
});

module.exports = { all };