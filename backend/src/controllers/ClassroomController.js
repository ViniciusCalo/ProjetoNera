const classroomModel = require('../models/ClassroomModel');
const express = require('express');
const router = express.Router();
const { generateHash } = require('../util/hash');

const getAllClassrooms = router.get('/classroom', async (request, response) => {
    try {
        const classrooms = await classroomModel.getAllClassrooms();
        return response.status(200).json(classrooms);
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

const getAllClassroomByTeacherId = router.get('/classroom/:id', async (request, response) => {
    try {
        const teacherid = await classroomModel.getAllClassroomByTeacherId(request.params.id);
        if(!teacherid) {
            return response.status(404).json({ message: error.message || "Teacher not found" });
        }
        
        const classrooms = await classroomModel.getAllClassroomByTeacherId();
        return response.status(200).json(classrooms);
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

const createClassroom = router.post('/classroom/create', async (request, response) => {
    try {
        const { classroomname, classroomdescription, teacherid, trackid, moduleid } = request.body;
        tokenclass = generateHash(Date.now());
        const newClassroom = await classroomModel.createClassroom({classroomname, classroomdescription, teacherid, trackid, moduleid, tokenclass});
        return response.status(201).json({ message: "Classroom created successfully", newClassroom });
    } catch (error) {
        console.error('Error creating classroom:', error);
        return response.status(500).json({ message: error.message ||  "Internal server error" });
    }
});

module.exports = {
    getAllClassrooms,
    getAllClassroomByTeacherId,
    createClassroom
};
