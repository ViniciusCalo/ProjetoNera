const request = require('supertest');
const express = require('express');
const memoryGameRepo = require('../repositories/MemoryGameRepository');
const memoryGameController = require('../controllers/MemoryGameController');

jest.mock('../repositories/MemoryGameRepository');

const app = express();
app.use(express.json());
app.use('/memory-game', memoryGameController);

describe('Testando todas as rotas do jogo da memória', () => {
    describe('GET /memory-game/:gameid/images', () => {
        test('Deve responder com uma lista de imagens do jogo da memória', async () => {
            const mockImages = ['image1.png', 'image2.png'];
            memoryGameRepo.getImagesByGameId.mockResolvedValue(mockImages);

            const response = await request(app).get('/memory-game/1/images');

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(mockImages);
        });

        test('Deve responder com um erro ao tentar obter imagens', async () => {
            memoryGameRepo.getImagesByGameId.mockRejectedValue(new Error('Error fetching images'));

            const response = await request(app).get('/memory-game/1/images');

            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'Error fetching images');
        });
    });

    describe('POST /memory-game/result', () => {
        test('Deve responder com uma mensagem e um objeto de resultado do jogo criado', async () => {
            const mockResult = {
                score: 100,
                timeSpent: 60,
                resultDate: '2024-07-29',
                studentid: 1,
                gameid: 1
            };
            memoryGameRepo.createGameResult.mockResolvedValue(mockResult);

            const response = await request(app)
                .post('/memory-game/result')
                .send(mockResult);

            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe('Game result created successfully');
            expect(response.body.result).toEqual(mockResult);
        });

        test('Deve responder com um erro ao tentar criar resultado do jogo', async () => {
            memoryGameRepo.createGameResult.mockRejectedValue(new Error('Error creating game result'));

            const response = await request(app)
                .post('/memory-game/result')
                .send({
                    score: 100,
                    timeSpent: 60,
                    resultDate: '2024-07-29',
                    studentid: 1,
                    gameid: 1
                });

            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'Error creating game result');
        });
    });

    describe('GET /memory-game/student/:studentid/results', () => {
        test('Deve responder com uma lista de resultados do jogo da memória', async () => {
            const mockResults = [
                {
                    score: 100,
                    timeSpent: 60,
                    resultDate: '2024-07-29',
                    studentid: 1,
                    gameid: 1
                },
                {
                    score: 150,
                    timeSpent: 50,
                    resultDate: '2024-07-30',
                    studentid: 1,
                    gameid: 2
                }
            ];
            memoryGameRepo.getResultsByStudentId.mockResolvedValue(mockResults);

            const response = await request(app).get('/memory-game/student/1/results');

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(mockResults);
        });

        test('Deve responder com um erro ao tentar obter resultados do jogo', async () => {
            memoryGameRepo.getResultsByStudentId.mockRejectedValue(new Error('Error fetching game results'));

            const response = await request(app).get('/memory-game/student/1/results');

            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'Error fetching game results');
        });
    });
});
