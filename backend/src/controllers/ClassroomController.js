const { getAllClassroom, createClassroom } = require('../models/ClassroomModel');

const getAllClassroomHandler = async (req, res) => {
    try {
        const classrooms = await getAllClassroom();
        return res.status(200).json(classrooms);
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const createClassroomHandler = async (req, res) => {
    try {
        const { classroomname, classroomdescription, teacherid, trackid, moduleid } = req.body;
        const newClassroom = await createClassroom({ classroomname, classroomdescription, teacherid, trackid, moduleid });
        return res.status(201).json({ message: "Classroom created successfully", newClassroom });
    } catch (error) {
        console.error('Error creating classroom:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getAllClassroomHandler,
    createClassroomHandler
};
