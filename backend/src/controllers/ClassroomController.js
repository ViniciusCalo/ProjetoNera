const classroomModel = require('../models/ClassroomModel');
const express = require('express');
const router = express.Router();

const getAllClassrooms = router.get('/classroom', async (req, res) => {
    try {
        const classrooms = await classroomModel.getAllClassrooms();
        return res.status(200).json(classrooms);
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return res.status(500).json({ message: error.message || "Internal server error" });
    }
});

const getAllClassroomByTeacherId = router.get('/classroom/:id', async (req, res) => {
    try {
        const teacherid = await classroomModel.getAllClassroomByTeacherId(req.params.id);
        if(!teacherid) {
            return res.status(404).json({ message: error.message || "Teacher not found" });
        }
        
        const classrooms = await classroomModel.getAllClassroomByTeacherId();
        return res.status(200).json(classrooms);
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return res.status(500).json({ message: error.message || "Internal server error" });
    }
});

const createClassroom = router.post('/classroom/create', async (req, res) => {
    try {
        const { classroomid, classroomname, classroomdescription, teacherid, trackid, moduleid, tokenclass } = req.body;
        const newClassroom = await classroomModel.createClassroom({classroomid, classroomname, classroomdescription, teacherid, trackid, moduleid, tokenclass});
        return res.status(201).json({ message: "Classroom created successfully", newClassroom });
    } catch (error) {
        console.error('Error creating classroom:', error);
        return res.status(500).json({ message: error.message ||  "Internal server error" });
    }
});

module.exports = {
    getAllClassrooms,
    getAllClassroomByTeacherId,
    createClassroom
};
