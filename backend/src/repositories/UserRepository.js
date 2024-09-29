const user = require('../models/UserModel');
const classroom = require('../models/ClassroomModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const getUserById = async (id) => {
    try {
        const users = await user.findByPk(id);
        return users;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

const createUser = async ({ username, useremail, userpassword, role, profilepicture }) => {
    try {
        const hashedPassword = await bcrypt.hash(userpassword, 10);
        const userExists = await user.findOne({ where: { useremail } });
        if (userExists) {
            throw new Error('User already exists');
        }
        if (userpassword === null || userpassword.length === 0) {
            throw new Error('Password cannot be empty');
        }

        const newUser = await user.create({
            username,
            useremail,
            userpassword: hashedPassword,
            role,
            profilepicture
        });
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

const uploadProfilePic = async (id, profilepicture) => {
    try {
        const users = await user.findByPk(id);
        if (!users) {
            throw new Error('User not found');
        }

        users.profilepicture = profilepicture;
        await users.save();

        return users;
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        throw error;
    }
};

const getProfilePicture = async (id) => {
    try {
        const users = await user.findByPk(id);
        if (!users) {
            throw new Error('User not found');
        }
        return users.profilepicture;
    } catch (error) {
        console.error('Error fetching profile picture:', error);
        throw error;
    }
};

const loginUser = async ({ useremail, userpassword, role }) => {
    try {
        const users = await user.findOne({ where: { useremail, role } });

        if (!users) {
            throw new Error('Invalid email, password or role provided');
        }

        const isPasswordValid = await bcrypt.compare(userpassword, users.userpassword);

        if (!isPasswordValid || isPasswordValid.length === 0) {
            throw new Error('Invalid email or password');
        }

        const name = users.username;
        const profilepic = users.profilepicture;
        const token = jwt.sign({ userid: users.userid, role: users.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        return { token, name, profilepic };
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};


const loginUserGoogle = async ({ useremail, username, role}) => {
    try {
        const users = await user.findOne({ where: { useremail, username, role } });

        if (!users) {
            throw new Error('Invalid email, password or role provided');
        }

        const name = users.username;
        const profilepic = users.profilepicture;
        const token = jwt.sign({ userid: users.userid, role: users.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        return { token, name, profilepic };
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}
module.exports = {
    getUserById,
    createUser,
    loginUser,
    uploadProfilePic,
    getProfilePicture,
    loginUserGoogle
};
