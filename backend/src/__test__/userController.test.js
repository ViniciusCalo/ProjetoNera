const request = require('supertest');
const app = require('../app');
const bcrypt = require('bcrypt');
const express = require('express');
const UserRepo = require('../repositories/UserRepository');

jest.mock('../repositories/UserRepository');

describe('Test all user routes', () => {

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
        const response = await request(app).post('/users/register').send(mockUser);
        expect(response.statusCode).toBe(201);
    });

    test('Should respond with an error for registration if user already exists', async () => {
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

    test('It should respond with a message and user object for login', async () => {
        const mockUser = {
            useremail: 'testuser@gmail.com',
            userpassword: 'password',
            role:'student'
        };
        UserRepo.loginUser.mockResolvedValue({
            useremail: mockUser.useremail,
            userpassword: await bcrypt.hash(mockUser.userpassword, 10),
            role: mockUser.role,
            token: 'test-token'
        });
        const response = await request(app).post('/users/login').send(mockUser);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message');
    });

    test('It should respond with an error for login if user not found', async () => {
        const mockUser = {
            useremail: 'testuser@gmail.com',
            userpassword: 'password',
            role:'teacher'
        };
        UserRepo.loginUser.mockRejectedValue(new Error('Invalid email or password'));
        const response = await request(app).post('/users/login').send(mockUser);
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message', 'Invalid email or password');
    });

});
