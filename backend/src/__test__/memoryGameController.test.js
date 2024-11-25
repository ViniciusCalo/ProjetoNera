const request = require('supertest');
const express = require('express');
const passport = require('passport');
const vwMemoryGamePairsController = require('../controllers/GamesController/MemoryGameController');
const VwMemoryGamePairsRepository = require('../repositories/GamesRepository/MemoryGameRepository');
const app = require('../app')

// Mock do `VwMemoryGamePairsRepository`
jest.mock('../repositories/GamesRepository/MemoryGameRepository');

describe('vwMemoryGamePairsController', () => {
    beforeEach(() => {
        // Limpa os mocks antes de cada teste
        jest.clearAllMocks();
    });

    describe('GET /memory-game-pairs', () => {
        it('deve retornar todos os pares de imagens', async () => {
            const mockPairs = [
                { id: 1, gamename: 'Memory Game 1', imageUrl: 'image1.png' },
                { id: 2, gamename: 'Memory Game 2', imageUrl: 'image2.png' }
            ];

            // Mock da função findAll
            VwMemoryGamePairsRepository.findAll.mockResolvedValue(mockPairs);

            const response = await request(app).get('/memorygame');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockPairs);
        });

        it('deve retornar erro 500 ao falhar ao buscar os pares de imagens', async () => {
            // Mock para simular um erro ao buscar os pares
            VwMemoryGamePairsRepository.findAll.mockRejectedValue(new Error('Erro ao buscar pares de imagens'));

            const response = await request(app).get('/memorygame');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro ao buscar pares de imagens' });
        });
    });
});
