const express = require('express');
const passport = require('passport');
const userRepo = require('../repositories/UserRepository');
const router = express.Router();
const homeRepo = require('../repositories/HomeRepository');

router.get('/', async (request, response) => {
    try {
        const homeData = await homeRepository.getClassroomAndTeachr();

        return response.status(200).json(homeData);

        // TODO: Implement the logic to get the classroom and teachers data
        // and return it as a JSON response.
        // Example:
        // return response.status(200).json({ classrooms: classrooms, teachers: teachers });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message || "Internal server error"});
    }
});


