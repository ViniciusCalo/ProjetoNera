const request = require('supertest');
const express = require('express');
const classroomRepo = require('../repositories/ClassroomRepository');
const classroomController = require('../controllers/ClassroomController');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Mock do `classroomRepo`
jest.mock('../repositories/ClassroomRepository');

// Mock do Passport Middleware
const mockUser = { teacherid: 1, name: 'Professor Mock' };

// Função de mock para `passport.authenticate`
jest.mock('passport', () => ({
    __esModule: true,
    default: jest.fn(),
    authenticate: jest.fn(() => (req, res, next) => {
        req.user = mockUser;
        next();
    }),
    initialize: jest.fn(() => (req, res, next) => {
        next();
    }),
}));

// Configuração básica da aplicação para os testes
const app = express();
app.use(express.json());
app.use(passport.initialize()); // Corrigindo o `passport.initialize`

// Usando o controlador que será testado
app.use('/classrooms', classroomController);

describe('ClassroomController', () => {
    describe('GET /classrooms', () => {
        it('deve retornar todas as salas', async () => {
            const mockClassrooms = [
                { classroomid: 1, classroomname: 'Classroom 1', teacherid: 1 },
                { classroomid: 2, classroomname: 'Classroom 2', teacherid: 1 },
            ];
            classroomRepo.getAllClassrooms.mockResolvedValue(mockClassrooms);

            const response = await request(app).get('/classrooms');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockClassrooms);
        });

        it('deve retornar erro 500 ao falhar em buscar as salas', async () => {
            classroomRepo.getAllClassrooms.mockRejectedValue(new Error('Erro ao buscar salas'));

            const response = await request(app).get('/classrooms');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro ao buscar salas' });
        });
    });

    describe('GET /classrooms/teacher', () => {
        it('deve retornar todas as salas de um professor', async () => {
            const mockClassrooms = [
                { classroomid: 1, classroomname: 'Classroom 1', teacherid: 1 },
            ];
            classroomRepo.getAllClassroomByTeacherId.mockResolvedValue(mockClassrooms);

            const response = await request(app)
                .get('/classrooms/teacher')
                .set('Authorization', `Bearer ${jwt.sign(mockUser, 'secret')}`);

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockClassrooms);
        });

        it('deve retornar erro 404 se o professor não tiver salas', async () => {
            classroomRepo.getAllClassroomByTeacherId.mockResolvedValue([]);

            const response = await request(app)
                .get('/classrooms/teacher')
                .set('Authorization', `Bearer ${jwt.sign(mockUser, 'secret')}`);

            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: "Professor não encontrado ou nenhuma sala relacionada" });
        });
    });

    describe('POST /classrooms/create', () => {
        it('deve criar uma sala', async () => {
            const newClassroom = { classroomname: 'New Classroom', classroomdescription: 'Descrição', trackid: 1, moduleid: 1 };
            const mockClassroom = { ...newClassroom, classroomid: 1 };
            
            classroomRepo.createClassroom.mockResolvedValue(mockClassroom);

            const response = await request(app)
                .post('/classrooms/create')
                .set('Authorization', `Bearer ${jwt.sign(mockUser, 'secret')}`)
                .send(newClassroom);

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('message', 'Classroom created successfully');
            expect(response.body.newClassroom).toEqual(mockClassroom);
        });

        it('deve retornar erro 500 ao falhar em criar uma sala', async () => {
            classroomRepo.createClassroom.mockRejectedValue(new Error('Erro ao criar sala'));

            const response = await request(app)
                .post('/classrooms/create')
                .set('Authorization', `Bearer ${jwt.sign(mockUser, 'secret')}`)
                .send({ classroomname: 'New Classroom' });

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro ao criar sala' });
        });
    });

    describe('PUT /classrooms/update', () => {
        it('deve atualizar uma sala', async () => {
            const updatedClassroom = { classroomdescription: 'Updated Description', trackid: 1, moduleid: 1 };
            const mockClassroom = { classroomid: 1, ...updatedClassroom };

            classroomRepo.editClassroom.mockResolvedValue(mockClassroom);

            const response = await request(app)
                .put('/classrooms/update')
                .set('Authorization', `Bearer ${jwt.sign(mockUser, 'secret')}`)
                .send(updatedClassroom);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'Classroom updated successfully');
            expect(response.body.updatedClassroom).toEqual(mockClassroom);
        });

        it('deve retornar erro 500 ao falhar em atualizar uma sala', async () => {
            classroomRepo.editClassroom.mockRejectedValue(new Error('Erro ao atualizar sala'));

            const response = await request(app)
                .put('/classrooms/update')
                .set('Authorization', `Bearer ${jwt.sign(mockUser, 'secret')}`)
                .send({ classroomdescription: 'Updated Description' });

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro ao atualizar sala' });
        });
    });
});
