const classroomModel = require('../models/ClassroomModel');

const getAllClassrooms = async (req, res) => {
    try {
        const classrooms = await classroomModel.getAllClassrooms();
        return res.status(200).json(classrooms);
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getAllClassroomByTeacherId = async (req, res) => {
    try {
        const teacherid = await classroomModel.getAllClassroomByTeacherId(req.params.teacherid);
        if(!teacherid) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        
        const classrooms = await classroomModel.getAllClassroomByTeacherId();
        return res.status(200).json(classrooms);
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const createClassroom = async (req, res) => {
    try {
        const { classroomname, classroomdescription, classroomcreation, teacherid, trackid, moduleid, tokenclass } = req.body;
        const newClassroom = await classroomModel.createClassroom({ classroomname, classroomdescription, classroomcreation, teacherid, trackid, moduleid, tokenclass});
        return res.status(201).json({ message: "Classroom created successfully", newClassroom });
    } catch (error) {
        console.error('Error creating classroom:', error);
        return res.status(500).json({ message: erro.message ||  "Internal server error" });
    }
};

module.exports = {
    getAllClassrooms,
    getAllClassroomByTeacherId,
    createClassroom
};
