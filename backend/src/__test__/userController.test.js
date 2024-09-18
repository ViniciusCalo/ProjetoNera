const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('supertest');
const userController = require('../controllers/UserController');
const userRepo = require('../repositories/UserRepository');

jest.mock('../repositories/UserRepository');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userController);

describe('UserController', () => {
    describe('registerUser', () => {
        it('deve registrar um novo usuário', async () => {
            const mockUser = { userid: 1, username: 'Test User', useremail: 'test@example.com', role: 'student' };
            userRepo.createUser.mockResolvedValue(mockUser);

            const response = await request(app)
                .post('/users/register')
                .send({ username: 'Test User', useremail: 'test@example.com', userpassword: 'password', role: 'student' });

            expect(response.status).toBe(201);
            expect(response.body).toEqual({
                message: "User created successfully",
                newUser: mockUser
            });
        });

        it('deve lançar um erro se o registro do usuário falhar', async () => {
            userRepo.createUser.mockRejectedValue(new Error('Erro'));

            const response = await request(app)
                .post('/users/register')
                .send({ username: 'Test User', useremail: 'test@example.com', userpassword: 'password', role: 'student' });

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro' });
        });
    });

    describe('loginUser', () => {
        it('deve fazer login de um usuário', async () => {
            const mockUser = { token: 'test-token', username: 'Test User', profilepic: 'test-pic' };
            userRepo.loginUser.mockResolvedValue(mockUser);

            const response = await request(app)
                .post('/users/login')
                .send({ useremail: 'test@example.com', userpassword: 'password', role: 'student' });

            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                message: "Login successful",
                token: mockUser.token,
                username: mockUser.username,
                profilepic: mockUser.profilepic
            });
        });

        it('deve lançar um erro se o login do usuário falhar', async () => {
            userRepo.loginUser.mockRejectedValue(new Error('Erro'));

            const response = await request(app)
                .post('/users/login')
                .send({ useremail: 'test@example.com', userpassword: 'password', role: 'student' });

            expect(response.status).toBe(401);
            expect(response.body).toEqual({ message: 'Erro' });
        });
    });
});
