const explorarFracRepo = require('../repositories/achievements/AchievementExplorarFracoes');
const express = require('express');
require('dotenv').config();
const ModuleRepo = require('../repositories/ModuleRepository');
const studentRepo = require('../repositories/StudentRepository');

const unlockAchievement = async (studentid) => {
    try {
        const achievementid = parseInt(process.env.IDACHIEVEMENT_EXPFRACOES, 10);

        //verifica se os paramentros estão presentes

        if(!achievementid || !studentid){
            throw new Error("Parâmentros 'achievementid' e 'studentid' são obrigatórios");
        }

        const resultAchievement = await explorarFracRepo.unlockAchievementForStudent(studentid, achievementid);

        return (resultAchievement)
    } catch (error) {
        console.error('Error unlocking achievement:', error);
        //return response.status(500).json({ message: error.message || "Internal server error" });
    }
}

module.exports = {unlockAchievement};

