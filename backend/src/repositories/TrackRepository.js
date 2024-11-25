const track = require('../models/TrackModel');

class TrackRepository {
    async getAllTracks() {
        try {
            return await track.findAll();
        } catch (error) {
            throw new Error('Erro ao buscar trilhas: ' + error.message);
        }
    }

    async getTrackById(id) {
        try {
            return await track.findByPk(id);
        } catch (error) {
            throw new Error('Erro ao buscar trilha: ' + error.message);
        }
    }
}

module.exports = new TrackRepository();
