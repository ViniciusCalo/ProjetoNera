const express = require('express');
const request = require('supertest');
const passport = require('passport');
const homeRepo = require('../repositories/HomeTeacherRepository');
const homeController = require('../controllers/HomeTeacherController'); // Atualize para o caminho correto do seu controller

// Mock do repositório e do Passport
jest.mock('../repositories/HomeTeacherRepository');
jest.mock('passport', () => {
    const mockPassport = {
        authenticate: jest.fn(() => (req, res, next) => {
            // Simulação de um usuário autenticado padrão (estudante)
            req.user = { userid: 1, role: 'teacher', teacherid: 100};
            next();
        })
    };
    return mockPassport;
});

describe('HomeController', () => {
    let app;

    beforeAll(() => {
        // Inicialização do express com o controlador
        app = express();
        app.use(express.json()); // Middleware para parsing de JSON
        app.use('/home', homeController);
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

        it('deve retornar dados da home para um aluno autenticado', async () => {
            const mockData = { userid: 1, teacherid: 100 };

            // Mock da função `getAchievementAndStudent` do repositório
            homeRepo.getClassroomAndTeacher.mockResolvedValue(mockData);

            const response = await request(app).get('/home');

            // Adicionando um console.log para debug
            console.log('Resposta:', response.body);

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockData);
            expect(homeRepo.getClassroomAndTeacher).toHaveBeenCalledWith(1, 100);
        });


        it('deve retornar erro 500 ao ocorrer um erro no repositório', async () => {
            // Mock para simular um erro no repositório
            const mockError = new Error('Erro inesperado');
            homeRepo.getClassroomAndTeacher.mockRejectedValue(mockError);

            const response = await request(app).get('/home');

            // Adicionando um console.log para debug
            console.log('Erro capturado:', response.body);

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro inesperado' });
        });
    });
