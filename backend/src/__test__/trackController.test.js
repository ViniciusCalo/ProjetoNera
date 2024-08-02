const request = require('supertest');
const express = require('express');
const trackController = require('../controllers/TrackController');
const trackRepo = require('../repositories/TrackRepository');

jest.mock('../repositories/TrackRepository.js');

const app = express();
app.use(express.json());
app.use('/tracks', trackController);

describe('TrackController', () => {
    describe('GET /tracks', () => {
        it('deve retornar todas as trilhas', async () => {
            const mockTracks = [
                { trackid: 1, trackname: 'Track 1', trackdescription: 'Description 1' },
                { trackid: 2, trackname: 'Track 2', trackdescription: 'Description 2' },
            ];
            trackRepo.getAllTracks.mockResolvedValue(mockTracks);

            const response = await request(app).get('/tracks');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockTracks);
        });

        it('deve retornar erro 500 ao falhar em buscar as trilhas', async () => {
            trackRepo.getAllTracks.mockRejectedValue(new Error('Erro ao buscar trilhas'));

            const response = await request(app).get('/tracks');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro ao buscar trilhas' });
        });
    });

    describe('GET /tracks/:id', () => {
        it('deve retornar a trilha pelo ID', async () => {
            const mockTrack = { trackid: 1, trackname: 'Track 1', trackdescription: 'Description 1' };
            trackRepo.getTrackById.mockResolvedValue(mockTrack);

            const response = await request(app).get('/tracks/1');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockTrack);
        });

        it('deve retornar erro 404 se a trilha não for encontrada', async () => {
            trackRepo.getTrackById.mockResolvedValue(null);

            const response = await request(app).get('/tracks/1');

            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: 'Track not found' });
        });

        it('deve retornar erro 500 ao falhar em buscar a trilha pelo ID', async () => {
            trackRepo.getTrackById.mockRejectedValue(new Error('Erro ao buscar trilha'));

            const response = await request(app).get('/tracks/1');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro ao buscar trilha' });
        });
    });
});
