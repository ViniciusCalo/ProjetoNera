const { sequelize, Sequelize } = require('../database/db');

const user = sequelize.define('user', {
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
    profilepicture: {
        type: Sequelize.STRING,
        allowNull: true
    },
    role: {
        type: Sequelize.ENUM('student', 'teacher'),
        allowNull: false
    }
}, {
    tableName: 'tbuser',
    timestamps: false
});

module.exports = user;