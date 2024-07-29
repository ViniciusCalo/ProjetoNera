const request = require('supertest');
const express = require('express');
const { authenticateJWT, authorizeRole } = require('../middlewares/auth');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Configurando o aplicativo Express para os testes
const app = express();
app.use(express.json());
app.use(authenticateJWT);

// Mock da rota de criação de sala de aula, que requer a role de 'professor'
app.post('/classroom/create', authorizeRole('professor'), (req, res) => {
    res.status(201).json({ message: "Sala de aula criada com sucesso" });
});

describe('Autenticação e autorização', () => {
    it('deve permitir que um professor crie uma sala de aula', async () => {
        // Gerando um token JWT para um usuário com a role de 'professor'
        const token = jwt.sign({ userid: 1, role: 'professor' }, process.env.TOKENUTIL_SECRETKEY);
        
        // Fazendo uma requisição POST para a rota de criação de sala de aula com o token JWT
        const response = await request(app)
            .post('/classroom/create')
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Math 101', subject: 'Mathematics' });

        // Verificando se a resposta é a esperada
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Sala de aula criada com sucesso');
    });

    it('deve negar acesso a um usuário que não é professor', async () => {
        // Gerando um token JWT para um usuário com a role de 'student'
        const token = jwt.sign({ userid: 2, role: 'student' }, process.env.TOKENUTIL_SECRETKEY);
        
        // Fazendo uma requisição POST para a rota de criação de sala de aula com o token JWT
        const response = await request(app)
            .post('/classroom/create')
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Math 101', subject: 'Mathematics' });

        // Verificando se a resposta é a esperada
        expect(response.status).toBe(403);
        expect(response.body.message).toBe('Acesso negado');
    });
});
