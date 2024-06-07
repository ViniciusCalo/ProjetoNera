const { sequelize, Sequelize } = require('./db');

const Classroom = sequelize.define('Classroom', {
    classroomid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    classroomname: Sequelize.STRING,
    classroomdescription: Sequelize.STRING,
    teacherid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Ajuste para corresponder ao nome da tabela de usuários
            key: 'userid'
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
    }
}, {
    tableName: 'tbclassroom',
    timestamps: false
});

const getAllClassroom = async () => {
    try {
        const classrooms = await Classroom.findAll();
        return classrooms;
    } catch (error) {
        console.error('Error getting all classrooms:', error);
        throw error;
    }
};

const createClassroom = async ({ classroomname, classroomdescription, teacherid, trackid, moduleid }) => {
    try {
        const newClassroom = await Classroom.create({
            classroomname,
            classroomdescription,
            teacherid,
            trackid,
            moduleid
        });
        return newClassroom;
    } catch (error) {
        console.error('Error creating classroom:', error);
        throw error;
    }
};

module.exports = {
    Classroom,
    getAllClassroom,
    createClassroom
};
