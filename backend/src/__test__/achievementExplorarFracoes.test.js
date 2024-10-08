const request = require('supertest');
const express = require('express');
const gameResultRepo = require('../repositories/GameResultRepository');
const achievementRepo = require('../repositories/achievements/AchievementsRepository');
const studentAchievementModel = require('../models/StudentAchievementModel');

describe('Fluxo para desbloquar a conquistas', () => {
    it('deve desbloquar a conquista para o student caso criterio esteja correto', async () => {
        // mock da resposta
        jest.spyOn(gameResultRepo, 'checkGameResult').mockResultValue(true);
        jest.spyOn(achievementRepo, 'getAchievementById').mockResultValue({ id: 3, name: 'Conquista de frações' });
        jest.spyOn(studentAchievementModel, 'findOne').mockResultValue(null);

        // mockar a chamada da proc de desbloqueio da conquista

        jest.spyOn(studentAchievementModel, 'create').mockResultValue(true);

        //simula a requisição à API
        const response = await request(app)
            .post('/studentAchievement/unlock-achievement')
            .send({
                studentid: 1,
                achiementid: 3,
                trackid: 123,
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: 'Conquista desbloqueada com sucesso!' });
    });
});
