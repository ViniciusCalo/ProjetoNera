const Track = require('../models/TrackModel');

class TrackRepository {
    async getAllTracks() {
        try {
            return await Track.findAll();
        } catch (error) {
            throw new Error('Erro ao buscar trilhas: ' + error.message);
        }
    }

    async getTrackById(id) {
        try {
            return await Track.findByPk(id);
        } catch (error) {
            throw new Error('Erro ao buscar trilha: ' + error.message);
        }
    }
}

module.exports = new TrackRepository();
