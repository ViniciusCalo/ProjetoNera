const { sequelize, Sequelize } = require('./db');

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

const createUser = async ({ user_name, user_email, user_password }) => {

    try {
        const verifyUserExists = await User.findOne({
            where: {
                user_email: user_email
            }
        }).then(function (result) {
            if (result) {
                console.log('User already exists:', result);
            } else {
                const newUser = User.create({ user_name, user_email, user_password })
            }
        })
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// const loginUser = async ({ user_email, user_password }) =>{
//     try {

//     } catch (error) {
//         console.error('Error when trying to Login', error);
//     }
// }

module.exports = {
    getAll,
    createUser
};
