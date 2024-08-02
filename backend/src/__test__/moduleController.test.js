const request = require('supertest');
const express = require('express');
const moduleController = require('../controllers/ModuleController');
const moduleRepo = require('../repositories/ModuleRepository');

jest.mock('../repositories/ModuleRepository');

const app = express();
app.use(express.json());
app.use('/modules', moduleController);

describe('ModuleController', () => {
    describe('GET /modules', () => {
        it('deve retornar todos os módulos', async () => {
            const mockModules = [
                { moduleid: 1, modulename: 'Module 1', moduledescription: 'Description 1', trackid: 1 },
                { moduleid: 2, modulename: 'Module 2', moduledescription: 'Description 2', trackid: 2 },
            ];
            moduleRepo.getAllModules.mockResolvedValue(mockModules);

            const response = await request(app).get('/modules');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockModules);
        });

        it('deve retornar erro 500 ao falhar em buscar os módulos', async () => {
            moduleRepo.getAllModules.mockRejectedValue(new Error('Erro ao buscar módulos'));

            const response = await request(app).get('/modules');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro ao buscar módulos' });
        });
    });

    describe('GET /modules/:id', () => {
        it('deve retornar o módulo pelo ID', async () => {
            const mockModule = { moduleid: 1, modulename: 'Module 1', moduledescription: 'Description 1', trackid: 1 };
            moduleRepo.getModuleById.mockResolvedValue(mockModule);

            const response = await request(app).get('/modules/1');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockModule);
        });

        it('deve retornar erro 404 se o módulo não for encontrado', async () => {
            moduleRepo.getModuleById.mockResolvedValue(null);

            const response = await request(app).get('/modules/1');

            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: 'Module not found' });
        });

        it('deve retornar erro 500 ao falhar em buscar o módulo pelo ID', async () => {
            moduleRepo.getModuleById.mockRejectedValue(new Error('Erro ao buscar módulo'));

            const response = await request(app).get('/modules/1');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro ao buscar módulo' });
        });
    });

    describe('GET /modules/track/:trackid', () => {
        it('deve retornar todos os módulos de uma trilha por ID da trilha', async () => {
            const mockModules = [
                { moduleid: 1, modulename: 'Module 1', moduledescription: 'Description 1', trackid: 1 },
                { moduleid: 2, modulename: 'Module 2', moduledescription: 'Description 2', trackid: 1 },
            ];
            moduleRepo.getModulesByTrackId.mockResolvedValue(mockModules);

            const response = await request(app).get('/modules/track/1');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockModules);
        });

        it('deve retornar erro 404 se nenhum módulo for encontrado para a trilha', async () => {
            moduleRepo.getModulesByTrackId.mockResolvedValue([]);

            const response = await request(app).get('/modules/track/1');

            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: 'No modules found for this track' });
        });

        it('deve retornar erro 500 ao falhar em buscar os módulos pela trilha', async () => {
            moduleRepo.getModulesByTrackId.mockRejectedValue(new Error('Erro ao buscar módulos pela trilha'));

            const response = await request(app).get('/modules/track/1');

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Erro ao buscar módulos pela trilha' });
        });
    });
});
