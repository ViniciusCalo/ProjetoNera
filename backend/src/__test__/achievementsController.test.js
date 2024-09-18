const request = require('supertest');
const express = require('express');
const achievementRepo = require('../repositories/AchievementsRepository');
const achievementController = require('../controllers/AchievementsController');

jest.mock('../repositories/AchievementsRepository');

const app = express();
app.use(express.json());
app.use('/api', achievementController);

describe('Testando todas as rotas de conquistas', () => {
    describe('GET /api/achievement', () => {
        test('Deve responder com uma lista de conquistas', async () => {
            const mockAchievements = [
                { id: 1, name: 'Achievement 1', description: 'Description 1' },
                { id: 2, name: 'Achievement 2', description: 'Description 2' }
            ];
            achievementRepo.getAllAchievements.mockResolvedValue(mockAchievements);

            const response = await request(app).get('/api/achievement');

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(mockAchievements);
        });

        test('Deve responder com um erro ao tentar obter conquistas', async () => {
            achievementRepo.getAllAchievements.mockRejectedValue(new Error('Error fetching achievements'));

            const response = await request(app).get('/api/achievement');

            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'Error fetching achievements');
        });
    });

    describe('GET /api/achievement/:id', () => {
        test('Deve responder com uma conquista específica por ID', async () => {
            const mockAchievement = { id: 1, name: 'Achievement 1', description: 'Description 1' };
            achievementRepo.getAchievementById.mockResolvedValue(mockAchievement);

            const response = await request(app).get('/api/achievement/1');

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(mockAchievement);
        });

        test('Deve responder com 404 se a conquista não for encontrada', async () => {
            achievementRepo.getAchievementById.mockResolvedValue(null);

            const response = await request(app).get('/api/achievement/999');

            expect(response.statusCode).toBe(404);
            expect(response.body).toHaveProperty('message', 'Achievement not found');
        });

        test('Deve responder com um erro ao tentar obter uma conquista por ID', async () => {
            achievementRepo.getAchievementById.mockRejectedValue(new Error('Error fetching achievement'));

            const response = await request(app).get('/api/achievement/1');

            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'Error fetching achievement');
        });
    });
});
