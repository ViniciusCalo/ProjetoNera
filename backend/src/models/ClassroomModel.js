const { sequelize, Sequelize } = require('../database/db');

const classroom = sequelize.define('classroom', {
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
            model: 'teacher', // Nome da tabela de referência
            key: 'teacherid'
        }
    },
    trackid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tracks',
            key: 'trackid'
        }
    },
    moduleid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'modules',
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

module.exports = classroom; // Exportação direta
