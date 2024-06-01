const { sequelize, Sequelize } = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const User = sequelize.define('User', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: Sequelize.STRING,
    user_email: Sequelize.STRING,
    user_password: Sequelize.STRING,
    // Outros campos
}, {
    tableName: 'tb_user',
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

const createUser = async ({ user_name, user_email, user_password }) => {

    try {
        const hashedPassword = await bcrypt.hash(user_password, 10);
        const verifyUserExists = await User.findOne({
            where: {
                user_email: user_email
            }
        }).then(function (result) {
            if (result) {
                console.log('User already exists:', result);
            } else {
                const newUser = User.create({ 
                    user_name,
                    user_email,
                    user_password:hashedPassword
                });
            }
        })
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

const loginUser = async ({ user_email, user_password }) => {
    try {
        const user = await User.findOne({ where: { user_email } });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(user_password, user.user_password);

        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        const token = jwt.sign({ userId: user.user_id}, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        });

        return { user };
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
