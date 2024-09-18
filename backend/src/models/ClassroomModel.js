const { sequelize, Sequelize } = require('../database/db');


const Classroom = sequelize.define('Classroom', {
    classroomid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    classroomname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    classroomdescription: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    classroomcreation: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    teacherid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Teacher', // Ajuste para corresponder ao nome da tabela de usuários
            key: 'teacherid'
        }
    },
    trackid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Tracks', // Ajuste para corresponder ao nome da tabela de trilhas
            key: 'trackid'
        }
    },
    moduleid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Modules', // Ajuste para corresponder ao nome da tabela de módulos
            key: 'moduleid'
        }
    },
    tokenclass: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tbclassroom',
    timestamps: false
});


module.exports = {Classroom}