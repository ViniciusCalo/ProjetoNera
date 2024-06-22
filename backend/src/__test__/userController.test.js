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

    test('It should respond with a message and user object for login', async () => {
        const user = {
            useremail: 'testuser@gmail.com',
            userpassword: 'password'
        };

        UserLogin.loginUser.mockResolvedValue({
            useremail: user.useremail,
            userpassword: await bcrypt.hash(user.userpassword, 10)
        });

        const response = await request(app).post('/user/login').send(user);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message');
    });

    test('It should respond with a message and token for login', async () => {
        const expectedResult = { test: false };
        UserLogin.getUserById.mockResolvedValue(expectedResult);

        const response = await request(app).get('/user/1');
        expect(response.body).toStrictEqual(expectedResult);
        expect(response.statusCode).toBe(2007);
    });
});


