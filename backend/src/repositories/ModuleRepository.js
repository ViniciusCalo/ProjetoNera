const Module = require('../models/ModuleModel');

class ModuleRepository {
    async getAllModules() {
        try {
            return await Module.module.findAll();
        } catch (error) {
            throw new Error('Erro ao buscar módulos: ' + error.message);
        }
    }

    async getModuleById(id) {
        try {
            return await Module.module.findByPk(id);
        } catch (error) {
            throw new Error('Erro ao buscar módulo: ' + error.message);
        }
    }

    async getModulesByTrackId(trackid) {
        try {
            return await Module.module.findAll({ where: { trackid } });
        } catch (error) {
            throw new Error('Erro ao buscar módulos pela trilha: ' + error.message);
        }
    }
}

module.exports = ModuleRepository;
