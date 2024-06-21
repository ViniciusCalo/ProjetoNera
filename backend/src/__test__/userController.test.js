const request = require('supertest');
const app = require('../app');
const bcrypt = require('bcrypt');
const e = require('express');
const UserLogin = require('../models/UserModel');

jest.mock('../models/UserModel');

describe('Test the userLoginController', () => {
    test('It should respond with a message and user object for add', async () => {
            const user = {
                username: 'kedsson',
                useremail: 'testuser@gmail.com',
                userpassword: 'password',
                role: 'teacher'
            };
    
            UserLogin.createUser.mockResolvedValue({
                username: user.username,
                useremail: user.useremail,
                userpassword: await bcrypt.hash(user.userpassword, 10),
                role: user.role
            });

            const response = await request(app).post('/user/register').send(user);
            expect(response.statusCode).toBe(201);
        });
});


