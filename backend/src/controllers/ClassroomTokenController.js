const { generateToken, validateToken } = require('../utils/tokenUtil');
const ClassroomStudent = require('../models/ClassroomStudentModel');

const generateClassroomToken = async (req, res) => {
    try {
        const { classroomid } = req.body;
        const token = generateToken(classroomid);
        return res.status(201).json({ message: "Token created successfully", token });
    } catch (error) {
        console.error('Error generating token:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const joinClassroom = async (req, res) => {
    try {
        const { token, studentid } = req.body;
        const decoded = validateToken(token);

        if (!decoded) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        const newEnrollment = await ClassroomStudent.create({
            classroomid: decoded.classroomid,
            studentid
        });

        return res.status(201).json({ message: "Student enrolled successfully", newEnrollment });
    } catch (error) {
        console.error('Error joining classroom:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    generateClassroomToken,
    joinClassroom
};
