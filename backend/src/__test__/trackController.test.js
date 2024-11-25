const request = require('supertest');
const express = require('express');
const trackController = require('../controllers/TrackController');
const trackRepo = require('../repositories/TrackRepository');

jest.mock('../repositories/TrackRepository');
jest.mock('passport', () => {
    const mockPassport = {
        authenticate: jest.fn(() => (req, res, next) => {
            // Simulação de um usuário autenticado
            req.user = { userid: 1 };
            next();
        })
    };
    return mockPassport;
});

describe('TrackController', () => {
    let app;

    beforeAll(() => {
        // Criar uma app Express simulada para o teste
        app = express();
        app.use(express.json()); // Middleware para parsing de JSON
        app.use('/track', trackController);
    });

    beforeEach(() => {
        jest.clearAllMocks(); // Limpar todos os mocks antes de cada teste
    });

    describe('GET /track', () => {
        it('deve retornar todas as trilhas', async () => {
            const mockModules = [
                { trackid: 1, trackname: 'Module 1', trackdescription: 'Description 1', moduleid: 1 },
                { trackid: 2, trackname: 'Module 2', trackdescription: 'Description 2', moduleid: 2 },
            ];
            trackRepo.getAllTracks.mockResolvedValue(mockModules);

            const response = await request(app).get('/track/');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockModules);
        });

        it('deve retornar erro 500 ao falhar em buscar os trilhas', async () => {
            trackRepo.getAllTracks.mockRejectedValue(new Error('Erro ao buscar trilhas'));

            const response = await request(app).get('/track/');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({message: 'Erro ao buscar trilhas' });
        });
    });

    describe('GET /track/:id', () => {
        it('deve retornar a trilha pelo ID', async () => {
            const mockModule = { trackid: 1, trackname: 'Module 1', trackdescription: 'Description 1', moduleid: 1 };
            trackRepo.getTrackById.mockResolvedValue(mockModule);

            const response = await request(app).get('/track/1');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockModule);
        });

        it('deve retornar erro 404 se a trilha não for encontrada', async () => {
            trackRepo.getTrackById.mockResolvedValue(null);

            const response = await request(app).get('/track/1');

            expect(response.status).toBe(404);
            expect(response.body).toEqual({message: 'Track not found' });
        });

        it('deve retornar erro 500 ao falhar em buscar a trilha pelo ID', async () => {
            trackRepo.getTrackById.mockRejectedValue(new Error('Erro ao buscar trilha'));

            const response = await request(app).get('/track/1');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({message: 'Erro ao buscar trilha' });
        });
    });
});
