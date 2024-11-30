const { sequelize, Sequelize } = require('../../database/db.js'); // Importando Sequelize para usar `Op`
const request = require('supertest');
const express = require('express');
const bcrypt = require('bcrypt');
const userController = require('../../controllers/UserController');
const Clasroom = require('../../models/ClassroomModel.js');

describe('Testando as rotas da sala (tanto professor quanto aluno) de forma integrada', () => {

    let app;

    
})