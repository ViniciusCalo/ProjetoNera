const { sequelize, Sequelize } = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const User = sequelize.define('User', {
    userid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,
    useremail: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    userpassword: Sequelize.STRING,
    role: {
        type: Sequelize.ENUM('student', 'teacher'),
        allowNull: false
    }
}, {
    tableName: 'tbuser',
    timestamps: false
});

const getAll = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

const createUser = async ({ username, useremail, userpassword, role }) => {
    try {
        const hashedPassword = await bcrypt.hash(userpassword, 10);
        const userExists = await User.findOne({ where: { useremail } });

        if (userExists) {
            throw new Error('User already exists');
        }

        const newUser = await User.create({
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

const loginUser = async ({ useremail, userpassword }) => {
    try {
        const user = await User.findOne({ where: { useremail } });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(userpassword, user.userpassword);

        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        const token = jwt.sign({ userid: user.userid, role: user.role }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        return { user, token };
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};

module.exports = {
    getAll,
    getUserById,
    createUser,
    loginUser
};
