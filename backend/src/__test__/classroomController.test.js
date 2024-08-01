const request = require('supertest');
const express = require('express');
// const passport = require('passport'); // Comentado
const classroomController = require('../controllers/ClassroomController');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('../models');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
// app.use(passport.initialize()); // Comentado

// CORS Function to API Authorization
app.use(cors());

app.post('/classrooms/create', classroomController.createClassroom);

describe('ClassroomController', () => {
    beforeAll(async () => {
        await sequelize.sync();
    });

    afterAll(async () => {
        await sequelize.close();
    });

    describe('POST /classrooms/create', () => {
        it('deve responder com uma mensagem e um objeto da nova sala de aula criada', async () => {
            const mockUser = {
                username: 'teacherUser',
                useremail: 'teacher@example.com',
                userpassword: 'password123',
                role: 'teacher'
            };
            const mockClassroom = {
                classroomname: '6º Ano A',
                teacherid: 1
            };
            await request(app).post('/users/register').send(mockUser);
            const response = await request(app).post('/classrooms/create').send(mockClassroom);
            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('message', 'Classroom created successfully');
            expect(response.body).toHaveProperty('newClassroom');
        });

        it('deve responder com erro de servidor se ocorrer um erro na criação da sala de aula', async () => {
            const mockClassroom = {
                classroomname: '6º Ano A'
                // Falta teacherid
            };
            const response = await request(app).post('/classrooms/create').send(mockClassroom);
            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'Error creating classroom');
        });
    });
});
