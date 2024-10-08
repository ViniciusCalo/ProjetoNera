const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database/db');

const QuizQuestion = sequelize.define('QuizQuestion', {
    questionid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fkgameid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    question: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'tbquizquestions',
    timestamps: false
});

const QuizOption = sequelize.define('QuizOption', {
    optionid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fkquestionid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    option_text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'tbquizoptions',
    timestamps: false
});

// Define the relationship
QuizQuestion.hasMany(QuizOption, { foreignKey: 'fkquestionid', as: 'options' });
QuizOption.belongsTo(QuizQuestion, { foreignKey: 'fkquestionid' });

module.exports = { QuizQuestion, QuizOption };
