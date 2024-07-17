const request = require('supertest');
const bcrypt = require('bcrypt');
const app = require('../app');
const UserRepo = require('../repositories/UserRepository');
const teacherRepo = require('../repositories/TeacherRepository');

jest.mock('../repositories/UserRepository');
jest.mock('../repositories/TeacherRepository');

describe('Testando todas as rotas de usuário', () => {
    describe('POST /users/register', () => {
        test('Deve responder com uma mensagem e um objeto do user adicionado', async () => {
            const mockUser = {
                username: 'kedsson',
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'teacher',
                teachercpf: '999.999.999-99'
            };

            UserRepo.createUser.mockResolvedValue({
                username: mockUser.username,
                useremail: mockUser.useremail,
                userpassword: await bcrypt.hash(mockUser.userpassword, 10),
                role: mockUser.role
            });

            teacherRepo.registerUserAsATeacher.mockResolvedValue({
                userid: 1,
                teachercpf: '999.999.999-99'
            });

            const response = await request(app).post('/users/register').send(mockUser);
            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe('Teacher created successfully');
            expect(response.body.newUser).toHaveProperty('username', mockUser.username);
            expect(response.body.newTeacher).toHaveProperty('teachercpf', '999.999.999-99');
        });

        test('Deve responder com uma mensagem e um objeto do User adicionado', async () => {
            const mockUser = {
                username: 'kedsson',
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'student'
            };

            UserRepo.createUser.mockResolvedValue({
                username: mockUser.username,
                useremail: mockUser.useremail,
                userpassword: await bcrypt.hash(mockUser.userpassword, 10),
                role: mockUser.role
            });

            const response = await request(app).post('/users/register').send(mockUser);
            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe('User created successfully');
            expect(response.body.newUser).toHaveProperty('username', mockUser.username);
        });

        test('Deve responder com um erro de cadastro caso usuario já exista', async () => {
            const mockUser = {
                username: 'kedsson',
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'teacher'
            };

            UserRepo.createUser.mockRejectedValue(new Error('User already exists'));

            const response = await request(app).post('/users/register').send(mockUser);
            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'User already exists');
        });
    });

    describe('POST /users/login', () => {
        test('Deve responder com uma mensagem e um objeto de usuário para login', async () => {
            const mockUser = {
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'student'
            };

            UserRepo.loginUser.mockResolvedValue({
                useremail: mockUser.useremail,
                userpassword: await bcrypt.hash(mockUser.userpassword, 10),
                role: mockUser.role,
                token: 'test-token'
            });

            const response = await request(app).post('/users/login').send(mockUser);
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'Login successful');
            expect(response.body).toHaveProperty('token', 'test-token');
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

        test('Deve responder com um erro de login se o usuário não for encontrado', async () => {
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
});
