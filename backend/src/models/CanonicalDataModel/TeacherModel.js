const { sequelize, Sequelize } = require('../../database/db');

const Teacher = sequelize.define('Teacher', {
    teacherid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'User', //referenciando o userId como FK na tabela teacher
            key: 'userid'
        },
        unique: true

    },
    teachercpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'tbteacher',
    timestamps: false
});

module.exports = { Teacher }