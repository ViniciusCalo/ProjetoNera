const express = require('express');
const passport = require('passport');
const classroomStudentRepo = require('../repositories/ClassroomStudentRepository');
const teacherRepo = require('../repositories/TeacherRepository');
const router = express.Router();

router.put('/joinClassroom', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const { tokenclass } = request.body;
        const { studentid } = request.user;

        // Verifica se o tokenclass foi fornecido
        if (!tokenclass || tokenclass.trim() === '') {
            return response.status(400).json({ message: "É obrigatório inserir um token" });
        } 

        // Linka aluno e sala pela tabela de relacionamento
        const joinClassroom = await classroomStudentRepo.addStudentOnClassroom({ studentid, tokenclass });
        const result = joinClassroom.classroomDetails;
        return response.status(201).json({ message: "Aluno associado à sala com sucesso", result });

    } catch (error) {
        console.error('Error enrolling student:', error);
        return response.status(500).json({ message: "Internal server error" });
    }
});
// Nova rota para obter todas as salas de aula de um aluno
router.get('/classrooms', passport.authenticate('jwt', { session: false }), async (request, response) => {
    try {
        const { studentid } = request.user;

        // Buscar todas as salas de aula do aluno
        const classrooms = await classroomStudentRepo.getAllClassroomsByStudent({ studentid });
        return response.status(200).json({ classrooms });

    } catch (error) {
        console.error('Error getting classrooms by student:', error);
        return response.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
