const User = require('../../models/UserModel.js');
const { sequelize, Sequelize } = require('../../database/db.js'); 
const request = require('supertest');
const express = require('express');
const bcrypt = require('bcryptjs');
const userController = require('../../controllers/UserController');
const Teacher = require('../../models/TeacherModel.js');
const Student = require('../../models/StudentModel.js');

describe('Testando todas as rotas de usuario de forma integrada', () => {
    let app;

    beforeAll(async () => {
        // Configurando o ambiente de testes (Express)
        app = express();
        app.use(express.json());
        app.use('/users', userController);
       
    });

    afterAll(async () => {
        //pega o id o user teacher
        const iTeacherUser = await User.findOne({ where: { useremail: 'testIntegration@gmail.com' } });
        await Teacher.destroy({ where: { userid: iTeacherUser.userid } });

        //pega o id o user student
        const iStudentUser = await User.findOne({ where: { useremail: 'integrationTestStudent@gmail.com' } });
        await Student.destroy({ where: { userid: iStudentUser.userid } });

        await User.destroy({ where: { useremail: ['testIntegration@gmail.com', 'integrationTestStudent@gmail.com'] } });
        await sequelize.close();     
    });

    describe('POST Teacher /users/register', () => {
        //Teste de acerto do cadastro do usuario (professor)
        test('Deve responder com uma mensagem e um professor cadastrado no banco', async () => {
            const newUser = {
                username: 'kedsson',
                useremail: 'testIntegration@gmail.com',
                userpassword: 'password',
                role: 'teacher',
                teachercpf: '123.456.789-01'
            }

            const response = await request(app)
                .post('/users/register')
                .send(newUser);

            //Verifica o status da resposta
            expect(response.statusCode).toEqual(201);

            //Verifica se a resposta contém o novo professor cadastrado
            const userOnDatabase = await User.findOne({ where: { useremail: newUser.useremail } });
            expect(userOnDatabase).toBeTruthy();
            expect(userOnDatabase.username).toBe(newUser.username);

        });

        //Criar teste de erro!!
    });

    //Teste Integrado de cadastro de aluno
    describe('POST Student /users/register', () => {
        test('Deve responder com uma mensagem e um professor cadastro do aluno no banco', async () => {
            const newUser = {
                username: 'ViniciusITest',
                useremail: 'integrationTestStudent@gmail.com',
                userpassword: 'password',
                role: 'student',
            }

            const response = await request(app)
                .post('/users/register')
                .send(newUser);

            //Verifica o status da resposta
            expect(response.statusCode).toEqual(201);

            //Verifica se a resposta contém o novo professor cadastrado
            const userOnDatabase = await User.findOne({ where: { useremail: newUser.useremail } });
            expect(userOnDatabase).toBeTruthy();
            expect(userOnDatabase.username).toBe(newUser.username);

        });

        //Criar teste de erro!!
    });

    //Test Integrado de login do aluno
    describe('POST /users/login', () => {
        test('Deve responder com uma mensagem de login para aluno com sucesso', async () => {
            const newUser = {
                useremail: 'integrationTestStudent@gmail.com',
                userpassword: 'password',
                role: 'student'
            };

            const response = await request(app)
                .post('/users/login')
                .send(newUser);

            expect(response.statusCode).toEqual(200);
            //Verifica se a resposta contém o novo professor cadastrado
            const userOnDatabase = await User.findOne({ where: { useremail: newUser.useremail } });
            expect(userOnDatabase).toBeTruthy();
            expect(userOnDatabase.useremail).toBe(newUser.useremail);
        });
    });

    //Test Integrado de login do professor
    describe('POST /users/login', () => {
        test('Deve responder com uma mensagem de login para professor com sucesso', async () => {
            const newUser = {
                useremail: 'testIntegration@gmail.com',
                userpassword: 'password',
                role: 'teacher',
                teachercpf: '123.456.789-01'
            };

            const response = await request(app)
                .post('/users/login')
                .send(newUser);

            expect(response.statusCode).toEqual(200);
            //Verifica se a resposta contém o novo professor cadastrado
            const userOnDatabase = await User.findOne({ where: { useremail: newUser.useremail } });
            expect(userOnDatabase).toBeTruthy();
            expect(userOnDatabase.useremail).toBe(newUser.useremail);
        });
    });
});