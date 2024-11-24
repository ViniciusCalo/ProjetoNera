const request = require('supertest');
const bcrypt = require('bcrypt');
const express = require('express');
const UserRepo = require('../repositories/UserRepository');
const teacherRepo = require('../repositories/TeacherRepository');
const studentRepo = require('../repositories/StudentRepository');
const controller = require('../controllers/UserController');

// Mocking repositories
jest.mock('../repositories/UserRepository');
jest.mock('../repositories/TeacherRepository');
jest.mock('../repositories/StudentRepository');

// Mock do Passport para simular autenticação
jest.mock('passport', () => {
    const mockPassport = {
        authenticate: jest.fn(() => (req, res, next) => {
            // Simulação de um usuário autenticado
            req.user = { userid: 1 };
            next();
        })
    };
    return mockPassport;
});

describe('Testando todas as rotas de usuário', () => {
    let app;

    beforeAll(() => {
        // Criar uma app Express simulada para o teste
        app = express();
        app.use(express.json()); // Middleware para parsing de JSON
        app.use('/users', controller);
    });

    beforeEach(() => {
        jest.clearAllMocks(); // Limpar todos os mocks antes de cada teste
    });

    describe('POST Teacher /users/register', () => {
        test('Deve responder com uma mensagem e um professor cadastrado', async () => {
            const mockUser = {
                username: 'kedsson',
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'teacher',
                teachercpf: '999.999.999-99'
            };

            // Mock da resposta ao criar um novo usuário
            UserRepo.createUser.mockResolvedValue({
                username: mockUser.username,
                useremail: mockUser.useremail,
                userpassword: await bcrypt.hash(mockUser.userpassword, 10),
                role: mockUser.role
            });

            const response = await request(app).post('/users/register').send(mockUser);
            expect(response.statusCode).toBe(201);
            expect(response.body.newUser).toHaveProperty('username', mockUser.username);
        });

        test('Deve responder com um erro de cadastro pois o professor já existe', async () => {
            const mockUser = {
                username: 'kedsson',
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                teachercpf: '999.999.999-99',
                role: 'teacher'
            };

            UserRepo.createUser.mockRejectedValue(new Error('User already exists'));

            const response = await request(app).post('/users/register').send(mockUser);
            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'User already exists');
        });
    });

    describe('POST Student /users/register', () => {
        test('Deve responder com uma mensagem e um Aluno cadastrado', async () => {
            const mockUser = {
                username: 'kedsson',
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'student'
            };

            // Mock da resposta ao criar um novo usuário
            UserRepo.createUser.mockResolvedValue({
                username: mockUser.username,
                useremail: mockUser.useremail,
                userpassword: await bcrypt.hash(mockUser.userpassword, 10),
                role: mockUser.role
            });

            const response = await request(app).post('/users/register').send(mockUser);
            expect(response.statusCode).toBe(201);
            expect(response.body.newUser).toHaveProperty('username', mockUser.username);
        });

        test('Deve responder com um erro de cadastro pois o Aluno já existe', async () => {
            const mockUser = {
                username: 'kedsson',
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                teachercpf: '999.999.999-99',
                role: 'teacher'
            };

            UserRepo.createUser.mockRejectedValue(new Error('User already exists'));

            const response = await request(app).post('/users/register').send(mockUser);
            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'User already exists');
           
        });
    });

    describe('POST Teacher /users/login', () => {
        test('Deve responder com uma mensagem de login para professor com sucesso', async () => {
            const mockUser = {
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                teachercpf: '999.999.999-99',
                role: 'teacher'
            };

            UserRepo.loginUser.mockResolvedValue({
                useremail: mockUser.useremail,
                userpassword: await bcrypt.hash(mockUser.userpassword, 10),
                role: mockUser.role
            });
            teacherRepo.loginTeacher.mockResolvedValue({
                useremail: mockUser.useremail,
                teachercpf: '999.999.999-99'
            });

            const response = await request(app).post('/users/login').send(mockUser);
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'Teacher logged successfully');
        });

        test('Deve responder com um erro de login, pois teacherCpf não foi informado', async () => {
            const mockUser = {
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                teachercpf: null,
                role: 'teacher'
            };
            
            teacherRepo.loginTeacher.mockRejectedValue(new Error('CPF is required for teachers'));

            const response = await request(app).post('/users/login').send(mockUser);
            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'CPF is required for teachers');
        });

        test('Deve responder com um erro de login se o professor não for encontrado', async () => {
            const mockUser = {
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'teacher'
            };

            UserRepo.loginUser.mockRejectedValue(new Error('Invalid email or password'));

            const response = await request(app).post('/users/login').send(mockUser);
            expect(response.statusCode).toBe(401);
            expect(response.body).toHaveProperty('message', 'Invalid email or password');
        });
    });

    describe('POST Student /users/login', () => {
        test('Deve responder com uma mensagem de login para aluno com sucesso', async () => {
            const mockUser = {
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'student'
            };

            UserRepo.loginUser.mockResolvedValue({
                useremail: mockUser.useremail,
                userpassword: await bcrypt.hash(mockUser.userpassword, 10),
                role: mockUser.role
            });

            studentRepo.loginStudent.mockResolvedValue({
                useremail: mockUser.useremail
            });

            const response = await request(app).post('/users/login').send(mockUser);
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'Student logged successfully');
        });

        test('Deve responder com um erro de login, pois o email do aluno não foi informado', async () => {
            const mockUser = {
                useremail: null,
                userpassword: 'password',
                role: 'student'
            };
            
            studentRepo.loginStudent.mockRejectedValue(new Error('E-mail is required for students'));

            const response = await request(app).post('/users/login').send(mockUser);
            expect(response.statusCode).toBe(401);
            expect(response.body).toHaveProperty('message', 'Erro no login do aluno: E-mail is required for students');
        });

        test('Deve responder com um erro de login se o aluno não for encontrado', async () => {
            const mockUser = {
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'student'
            };

            UserRepo.loginUser.mockRejectedValue(new Error('Invalid email or password'));

            const response = await request(app).post('/users/login').send(mockUser);
            expect(response.statusCode).toBe(401);
            expect(response.body).toHaveProperty('message', 'Invalid email or password');
        });
    });

    describe('PUT /users/uploadpic', () => {
        test('Deve atualizar a foto de perfil do usuário', async () => {
            const mockUser = {
                userid: 1,
                profilepicture: 'http://example.com/profilepic.jpg'
            };
    
            // Simula a resposta do método uploadProfilePic do repositório
            UserRepo.uploadProfilePic.mockResolvedValue(mockUser);
    
            const response = await request(app)
                .put('/users/uploadpic')
                .send({ profilepicture: mockUser.profilepicture });
    
            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe('Foto de perfil atualizada com sucesso.');
            expect(response.body.updatedUser.profilepicture).toBe(mockUser.profilepicture);
        });

        test('Deve retornar erro 400 se a URL da foto de perfil não for fornecida', async () => {
            const response = await request(app)
                .put('/users/uploadpic')
                .send({ profilepicture: '' });

            expect(response.statusCode).toBe(400);
            expect(response.body.message).toBe('URL da foto de perfil é obrigatória.');
        });
    });

    describe('GET /users/profilepicture', () => {
        test('Deve retornar a foto de perfil do usuário', async () => {
            const mockProfilePicture = 'http://example.com/profile.jpg';

            UserRepo.getProfilePicture.mockResolvedValue(mockProfilePicture);

            const response = await request(app).get('/users/profilepicture');

            expect(response.statusCode).toBe(200);
            expect(response.body.profilepicture).toBe(mockProfilePicture);
        });

        test('Deve retornar erro 404 se o usuário não tiver foto de perfil', async () => {
            UserRepo.getProfilePicture.mockResolvedValue(null);

            const response = await request(app).get('/users/profilepicture');

            expect(response.statusCode).toBe(404);
            expect(response.body.message).toBe('Usuário não encontrado ou sem foto de perfil.');
        });
    });
});
