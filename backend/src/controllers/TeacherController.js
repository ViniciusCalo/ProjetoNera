const teacherRepo = require('../repositories/TeacherRepository');
const express = require('express');
const router = express.Router();

const getAll = router.get('/teacher', async (request, response) => {
    try {
        const teacher = await teacherModel.getAll();
        return response.status(200).json(teacher);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

const getTeacherById = router.get('/teacher/:id', async (request, response) => {
    try {
        const teacher = await teacherModel.getTeacherById(request.params.id);
        if (!teacher) {
            return response.status(404).json({ message: error.message || "User not found" });
        }
        return response.status(200).json(user);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

module.exports = {
    getAll,
    getTeacherById
}