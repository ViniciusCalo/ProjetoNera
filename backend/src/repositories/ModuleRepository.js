const classStudentModule = require('../models/ClassroomStudentModel');
const classroomModule =  require('../models/ClassroomModel')
const express = require('express');

const getModuleByStudentId = async (studentid, moduleid) => {
    try {
        const idstudent = await classStudentModule.findOne({where: studentid});
        const idmodule = await classroomModule.findOne({where: moduleid});

        if(idmodule === 1) {
            
        }

    } catch (error) {
        throw new Error('Erro ao buscar módulos do aluno: '+ error.message);
    }
};