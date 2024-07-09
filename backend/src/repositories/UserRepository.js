const userModel = require('../models/CanonicalDataModel/UserModel');
const Teacher = require('../models/CanonicalDataModel/TeacherModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

// const getStudentById = async ({id}) => {
//     try {
//         const studentId = await Student.findByPk(id);
//         return studentId;
//     } catch (error) {
//         console.error('Error trying to get student: ', error);
//         throw error;
//     }
// };

const getAll = async () => {
    try {
        const users = await userModel.User.findAll();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await userModel.User.findByPk(id);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

const createUser = async ({ username, useremail, userpassword, role}) => {
    try {

        const hashedPassword = await bcrypt.hash(userpassword, 10);
        const userExists = await userModel.User.findOne({ where: { useremail } });
        if (userExists) {
            throw new Error('User already exists');
        }

        const newUser = await userModel.User.create({
            username,
            useremail,
            userpassword: hashedPassword,
            role
        });
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

const loginUser = async ({ useremail, userpassword, role }) => {
    try {
        const user = await userModel.User.findOne({ where: { useremail, role } });

        if (!user) {
            throw new Error('Invalid email, password or role provided');
        }

        const isPasswordValid = await bcrypt.compare(userpassword, user.userpassword);

        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        const token = jwt.sign({ userid: user.userid, role: user.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });
        return { token };
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};
module.exports = {
    getAll,
    getUserById,
    createUser,
    loginUser,
    //getStudentById
};
