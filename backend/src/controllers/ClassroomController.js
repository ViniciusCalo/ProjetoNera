const classroomRepo = require('../repositories/ClassroomRepository');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const { generateHash } = require('../util/hash');

const getAllClassrooms = router.get('/teacher/classroom', async (request, response) => {
    try {
        const classrooms = await classroomRepo.getAllClassrooms();
        return response.status(200).json(classrooms);
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

const getAllClassroomByTeacherId = router.get('/teacher/classroom/:id',  passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const teacherid = request.params.id;
        
        const classrooms = await classroomRepo.getAllClassroomByTeacherId(teacherid);
        
        if (!classrooms.length) {
            return response.status(404).json({ message: "Teacher not found or no classrooms assigned" });
        }

        return response.status(200).json(classrooms);

    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});
const createClassroom = router.post('/teacher/classroom/create', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const { classroomname, classroomdescription, teacherid, trackid, moduleid } = request.body;
        tokenclass = generateHash(Date.now());
        const newClassroom = await classroomRepo.createClassroom({classroomname, classroomdescription, teacherid, trackid, moduleid, tokenclass});
        return response.status(201).json({ message: "Classroom created successfully", newClassroom });
    } catch (error) {
        console.error('Error creating classroom:', error);
        return response.status(500).json({ message: error.message ||  "Internal server error" });
    }
});

const updateClassroom = router.put('/teacher/classroom/update/:id', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try{
        const classroomid = request.params.id;
        const { classroomdescription, trackid, moduleid } = request.body;

        const tokenclass = generateHash(Date.now());
        const updatedClassroom = await classroomRepo.editClassroom({classroomid, classroomdescription, trackid, moduleid, tokenclass});
        return response.status(200).json({ message: "Classroom updated successfully", updatedClassroom });
    } catch(error){
        return response.status(500).json({ message: error.message ||  "Internal server error" });
    }
});

const all = router.get( async (request, response) => {
    getAllClassrooms();
    getAllClassroomByTeacherId();
    createClassroom();
    updateClassroom();
});

module.exports = { all };
