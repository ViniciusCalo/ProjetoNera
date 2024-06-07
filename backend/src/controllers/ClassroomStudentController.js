const ClassroomStudent = require('../models/ClassroomStudentModel');
const Classroom = require('../models/ClassroomModel');

const enrollStudent = async (req, res) => {
    try {
        const { classroomcode, studentid } = req.body;
        
        const classroom = await Classroom.Classroom.findOne({ where: { classroomcode } });

        if (!classroom) {
            return res.status(404).json({ message: "Classroom not found" });
        }

        const newEnrollment = await ClassroomStudent.create({
            classroomid: classroom.classroomid,
            studentid
        });

        return res.status(201).json({ message: "Student enrolled successfully", newEnrollment });
    } catch (error) {
        console.error('Error enrolling student:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    enrollStudent
};
