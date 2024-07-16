const request = require('supertest');
const passport = require('passport');
const app = require('../app');
const classroomRepo = require('../repositories/ClassroomRepository');
const { generateHash } = require('../util/hash');

jest.mock('../repositories/ClassroomRepository');
jest.mock('../util/hash');

describe('Testando todas as rotas de sala de aula', () => {
    describe('POST /classrooms/create', () => {
        const mockUser = {
            user: {
                teacherid: 1,
                userid: 1,
                role: 'teacher',
                token: 'test-token'
            }
        };

        beforeEach(() => {
            jest.spyOn(passport, 'authenticate').mockImplementation((strategy, options, callback) => {
                return (req, res, next) => {
                    req.user = mockUser.user;
                    next();
                };
            });
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        test('Deve responder com uma mensagem e um objeto da nova sala de aula criada', async () => {
            const mockClassroom = {
                classroomname: '6º Ano A',
                classroomdescription: 'Sala para ensino de porcentagem',
                trackid: 2,
                moduleid: 2,
                tokenclass: 'mock-token',
                teacherid: mockUser.user.teacherid
            };

            classroomRepo.createClassroom.mockResolvedValue(mockClassroom);
            generateHash.mockReturnValue('mock-token');

            const response = await request(app)
                .post('/classrooms/create')
                .set('Authorization', 'Bearer test-token') // Adicionando o header Authorization
                .send({
                    classroomname: '6º Ano A',
                    classroomdescription: 'Sala para ensino de porcentagem',
                    trackid: 2,
                    moduleid: 2
                });

            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe('Classroom created successfully');
            expect(response.body.newClassroom).toHaveProperty('classroomname', '6º Ano A');
            expect(response.body.newClassroom).toHaveProperty('teacherid', mockUser.user.teacherid);
        });

        test('Deve responder com erro de servidor se ocorrer um erro na criação da sala de aula', async () => {
            classroomRepo.createClassroom.mockRejectedValue(new Error('Error creating classroom'));

            const response = await request(app)
                .post('/classrooms/create')
                .set('Authorization', 'Bearer test-token') // Adicionando o header Authorization
                .send({
                    classroomname: '6º Ano A',
                    classroomdescription: 'Sala para ensino de porcentagem',
                    trackid: 2,
                    moduleid: 2
                });

            expect(response.statusCode).toBe(500);
            expect(response.body).toHaveProperty('message', 'Error creating classroom');
        });
    });
});
