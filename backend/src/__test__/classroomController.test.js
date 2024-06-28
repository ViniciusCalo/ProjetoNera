const request = require('supertest');
const express = require('express');
const app = require('../app');
const ClassroomRepo = require('../repositories/ClassroomRepository');
const { generateHash } = require('../util/hash');

jest.mock('../repositories/ClassroomRepository');

describe('Classroom Routes', () => {
    describe('GET /teacher/classroom', () => {
        test('Should return all classrooms', async () => {
            const classrooms = [{ id: 1, name: 'Classroom 1' }, { id: 2, name: 'Classroom 2' }];
            ClassroomRepo.getAllClassrooms.mockResolvedValue(classrooms);

            const response = await request(app).get('/teacher/classroom');

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(classrooms);
        });

        test('Should handle errors', async () => {
            ClassroomRepo.getAllClassrooms.mockRejectedValue(new Error('Internal server error'));

            const response = await request(app).get('/teacher/classroom');

            expect(response.statusCode).toBe(500);
            expect(response.body).toEqual({ message: 'Internal server error' });
        });
    });

    describe('GET /teacher/classroom/:id', () => {
        test('Should return classrooms by teacher id', async () => {
            const classrooms = [{ id: 1, name: 'Classroom 1' }];
            ClassroomRepo.getAllClassroomByTeacherId.mockResolvedValue(classrooms);

            const response = await request(app).get('/teacher/classroom/1');

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(classrooms);
        });

        test('Should return 404 if no classrooms found', async () => {
            ClassroomRepo.getAllClassroomByTeacherId.mockResolvedValue([]);

            const response = await request(app).get('/teacher/classroom/1');

            expect(response.statusCode).toBe(404);
            expect(response.body).toEqual({ message: 'Teacher not found or no classrooms assigned' });
        });

        test('Should handle errors', async () => {
            ClassroomRepo.getAllClassroomByTeacherId.mockRejectedValue(new Error('Internal server error'));

            const response = await request(app).get('/teacher/classroom/1');

            expect(response.statusCode).toBe(500);
            expect(response.body).toEqual({ message: 'Internal server error' });
        });
    });

    describe('POST /teacher/classroom/create', () => {
        test('Should create a new classroom', async () => {
            const mockClassroom = {
                classroomname: 'New Classroom',
                classroomdescription: 'Description',
                teacherid: 1,
                trackid: 1,
                moduleid: 1
            };
            const newClassroom = { id: 1, ...mockClassroom, tokenclass: 'somehash' };
            ClassroomRepo.createClassroom.mockResolvedValue(newClassroom);

            const response = await request(app).post('/teacher/classroom/create').send(mockClassroom);

            expect(response.statusCode).toBe(201);
            expect(response.body).toEqual({ message: 'Classroom created successfully', newClassroom });
        });

        test('Should handle errors', async () => {
            ClassroomRepo.createClassroom.mockRejectedValue(new Error('Internal server error'));

            const mockClassroom = {
                classroomname: 'New Classroom',
                classroomdescription: 'Description',
                teacherid: 1,
                trackid: 1,
                moduleid: 1
            };

            const response = await request(app).post('/teacher/classroom/create').send(mockClassroom);

            expect(response.statusCode).toBe(500);
            expect(response.body).toEqual({ message: 'Internal server error' });
        });
    });

    describe('PUT /teacher/classroom/update', () => {
        test('Should update a classroom', async () => {
            const mockClassroom = {
                classroomid: 1,
                classroomname: 'Updated Classroom',
                classroomdescription: 'Updated Description',
                teacherid: 1,
                trackid: 1,
                moduleid: 1
            };
            const updatedClassroom = { ...mockClassroom, tokenclass: 'somehash' };
            ClassroomRepo.updateClassroom.mockResolvedValue(updatedClassroom);

            const response = await request(app).put('/teacher/classroom/update').send(mockClassroom);

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ message: 'Classroom updated successfully', updatedClassroom });
        });

        // test('Should handle errors', async () => {
        //     ClassroomRepo.updateClassroom.mockRejectedValue(new Error('Internal server error'));

        //     const mockClassroom = {
        //         classroomid: 1,
        //         classroomname: 'Updated Classroom',
        //         classroomdescription: 'Updated Description',
        //         teacherid: 1,
        //         trackid: 1,
        //         moduleid: 1
        //     };

        //     const response = await request(app).put('/teacher/classroom/update').send(mockClassroom);

        //     expect(response.statusCode).toBe(500);
        //     expect(response.body).toEqual({ message: 'Internal server error' });
        // });
    });
});
