const request = require('supertest');
const app = require('../app');
const bcrypt = require('bcrypt');
const express = require('express');
const UserRepo = require('../repositories/UserRepository');

jest.mock('../repositories/UserRepository');

describe('Test Login and Register', () => {
    test('Should respond with a message and a object of the user add', async () => {
        const mockUser = {
            username: 'kedsson',
            useremail: 'testuser@gmail.com',
            userpassword: 'password',
            role: 'teacher'
        };

        UserRepo.createUser.mockResolvedValue({
            username: mockUser.username,
            useremail: mockUser.useremail,
            userpassword: await bcrypt.hash(mockUser.userpassword, 10),
            role: mockUser.role
        });

        const response = await request(app).post('/user/register').send(mockUser);
        expect(response.statusCode).toBe(201);
    });

    test('It should respond with a message and user object for login', async () => {
        const mockUser = {
            useremail: 'testuser@gmail.com',
            userpassword: 'password'
        };

        UserRepo.loginUser.mockResolvedValue({
            useremail: mockUser.useremail,
            userpassword: await bcrypt.hash(mockUser.userpassword, 10)
        });

        const response = await request(app).post('/user/login').send(mockUser);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message');
    });

    test('It should respond with a error (500) message as user not found', async () => {
        const expectedResult = { test: false };
        UserRepo.getUserById.mockImplementation(() => {throw Error("test")});
        const response = await request(app).get('/user/1');
        expect(response.body).toStrictEqual(expectedResult);
        expect(response.statusCode).toBe(200);
    });
});


