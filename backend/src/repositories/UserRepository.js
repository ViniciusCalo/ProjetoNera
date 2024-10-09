const userModel = require('../models/CanonicalDataModel/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

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

const createUser = async ({ username, useremail, userpassword, role, profilepicture }) => {
    try {
        const hashedPassword = await bcrypt.hash(userpassword, 10);
        const userExists = await userModel.User.findOne({ where: { useremail } });
        if (userExists) {
            throw new Error('User already exists');
        }
        if (userpassword === null || userpassword.length === 0) {
            throw new Error('Password cannot be empty');
        }

        const newUser = await userModel.User.create({
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
        const user = await userModel.User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }

        user.profilepicture = profilepicture;
        await user.save();

        return user;
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        throw error;
    }
};

const getProfilePicture = async (id) => {
    try {
        const user = await userModel.User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user.profilepicture;
    } catch (error) {
        console.error('Error fetching profile picture:', error);
        throw error;
    }
};

const loginUser = async ({ useremail, userpassword, role }) => {
    try {
        const user = await userModel.User.findOne({ where: { useremail, username, role } });

        if (!user) {
            throw new Error('Invalid email, password or role provided');
        }

        const isPasswordValid = await bcrypt.compare(userpassword, user.userpassword);

        if (!isPasswordValid || isPasswordValid.length === 0) {
            throw new Error('Invalid email or password');
        }

        const name = user.username;
        const profilepic = user.profilepicture;
        const token = jwt.sign({ userid: user.userid, role: user.role }, jwtConfig.secret, {
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
        const user = await userModel.User.findOne({ where: { useremail, username, role } });

        if (!user) {
            throw new Error('Invalid email, password or role provided');
        }

        const name = user.username;
        const profilepic = user.profilepicture;
        const token = jwt.sign({ userid: user.userid, role: user.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        return { token, name, profilepic };
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}
module.exports = {
    getAll,
    getUserById,
    createUser,
    loginUser,
    uploadProfilePic,
    getProfilePicture,
    loginUserGoogle
};
