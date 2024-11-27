const User = require('../../models/UserModel.js');
const { sequelize } = require('../../database/db.js');
const request = require('supertest');
const bcrypt = require('bcrypt');
const express = require('express');
const userController = require('../../controllers/UserController');

//Testes de integração
describe('Testando todas as rotas de usuario de foma integrada', () => {
    let app;
    let newUser;

    //Antes de rodar qualquer teste, é criado um Express para simular o ambiente
    beforeAll(async () => {
        //Configurando o ambiente de testes (express)
        app = express();
        app.use(express.json()); // Middleware para parsing de JSON
        app.use('/users', userController);

        //conecta ao banco e sincroniza os models
    });

    // beforeEach(async () => {
    //     // Garantir que o usuário não existe no banco
    //     if (newUser && newUser.useremail) {
    //         await User.destroy({ where: { useremail: newUser.useremail } });
    //     }
    // });

    afterAll(async () => {
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

            // // Opcional: Verifique se a senha foi corretamente criptografada
            // const isPasswordValid = await bcrypt.compare(newUser.userpassword, newUser.userpassword);
            // expect(isPasswordValid).toBe(true);
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
    });
});