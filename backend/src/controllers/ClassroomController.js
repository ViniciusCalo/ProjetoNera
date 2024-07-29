const classroomRepo = require('../repositories/ClassroomRepository');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const { generateHash } = require('../util/hash');

router.get('/', async (request, response) => {
    try {
        const classrooms = await classroomRepo.getAllClassrooms();
        return response.status(200).json(classrooms);
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

router.get('/:id', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const classrooms = await classroomRepo.getAllClassroomByTeacherId(teacherid);
        
        if (!classrooms.length) {
            return response.status(404).json({ message: "Professor não encontrado ou nenhuma sala relacionada" });
        }

        return response.status(200).json(classrooms);

    } catch (error) {
        console.error('Erro ao tentar encontrar salas:', error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

router.post('/create', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const { classroomname, classroomdescription, trackid, moduleid } = request.body;
        const { teacherid } = request.user; // Extraindo teacherid do objeto request.user

        if (!teacherid) {
            return response.status(403).json({ message: "You are not authorized to create a classroom" });
        }

        const tokenclass = generateHash(Date.now());
        const newClassroom = await classroomRepo.createClassroom({
            classroomname,
            classroomdescription,
            trackid,
            moduleid,
            tokenclass,
            teacherid // Passando teacherid para o repositório
        });

        return response.status(201).json({ message: "Classroom created successfully", newClassroom });
    } catch (error) {
        console.error('Error creating classroom:', error);
        return response.status(500).json({ message: error.message || "Internal server error" });
    }
});

router.put('/update', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try{
        const classroomid = request.user;
        const { classroomdescription, trackid, moduleid } = request.body;

        const tokenclass = generateHash(Date.now());
        const updatedClassroom = await classroomRepo.editClassroom({classroomid, classroomdescription, trackid, moduleid, tokenclass});
        return response.status(200).json({ message: "Classroom updated successfully", updatedClassroom });
    } catch(error){
        return response.status(500).json({ message: error.message ||  "Internal server error" });
    }
});


module.exports = router;
